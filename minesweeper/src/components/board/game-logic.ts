import { Content } from '../../enum/Content';
import { ICell } from '../../interfaces/ICell'
export interface IPair {
    row: number;
    col: number;
}
export interface ICleanFieldResult {
    isExploded: boolean;
    newGameState: [ICell[]];
}
export const scatterMines = (safeRow: number, safeCol: number):
    Promise<IPair[]> => {
    return new Promise((resolve) => {
        const reservedCells: [boolean[]] = [[]];
        const pairs: IPair[] = [];
        let counter = 0;
        while (counter < 99) {
            const randomCol = Math.floor(Math.random() * 30);
            const randomRow = Math.floor(Math.random() * 16);
            if (randomCol === safeCol && randomRow === safeRow)
                continue;
            if (reservedCells[randomRow] && reservedCells[randomRow][randomCol])
                continue;

            reservedCells[randomRow] = [];
            reservedCells[randomRow][randomCol] = true;
            pairs.push({ row: randomRow, col: randomCol });
            counter += 1;
        }
        console.log('scattered', pairs);
        console.log('mines count', pairs.length);
        resolve(pairs);
    });
}

export const cleanField =
    (row: number, col: number, gameState: [ICell[]]): ICleanFieldResult => {
        const result =
            {
                newGameState: gameState,
                isExploded: false
            } as ICleanFieldResult;
        if (gameState[row][col].hasMine) {
            blowupBoard(result.newGameState);
            result.isExploded = true;
        }
        else {
            openCell(row, col, result.newGameState);
            result.isExploded = false;
        }
        return result;
    }

export const blowupBoard = (gameState: [ICell[]]): void => {
    for (let row = 0; row <= 15; row++) {
        for (let col = 0; col <= 29; col++) {
            if (gameState[row][col].hasMine) {
                gameState[row][col].isOpened = true;
                gameState[row][col].content = Content.explodedMine
            }
        }
    }
}

export const openCell = (row: number, col: number, gameState: [ICell[]]): void => {
    const stack: IPair[] = [];
    const registeredInStack: [boolean[]] = [[]];
    stack.push({ row: row, col: col });
    registeredInStack[row][col] = true;

    while (stack.length !== 0) {
        const popedCellIndex = stack.pop();
        if (popedCellIndex == undefined)
            break;

        gameState[popedCellIndex.row][popedCellIndex.col].isOpened = true;
        const adjacentCellsIndex =
            getAdjacentCellsIndex(popedCellIndex.row, popedCellIndex.col);
        let adjacentMinesCount = 0;
        for (let i = 0; i <= 7; i++) {
            if (adjacentCellsIndex[i] == null)
                continue;
            else {
                const r = adjacentCellsIndex[i]?.row as number;
                const c = adjacentCellsIndex[i]?.col as number;
                if (gameState[r][c].hasMine) {
                    adjacentMinesCount++;
                }
            }
        }
        if (adjacentMinesCount === 0) {
            gameState[popedCellIndex.row][popedCellIndex.col].content =
                Content.clearedBlock;

            adjacentCellsIndex.forEach((i) => {
                if (registeredInStack[i?.row as number][i?.col as number] !== true) {
                    registeredInStack[i?.row as number][i?.col as number] = true;
                    stack.push({ row: i?.row as number, col: i?.col as number });
                }
            })

        }
        else {
            gameState[popedCellIndex.row][popedCellIndex.col].content =
                Content.number;
            gameState[popedCellIndex.row][popedCellIndex.col].adjacentMinesCount =
                adjacentMinesCount;
        }
    }
}

export const getAdjacentCellsIndex = (row: number, col: number): (IPair | null)[] => {
    const adjacentCellsIndex: (IPair | null)[] = [];
    let tempRow = 0;
    let tempCol = 0;
    /* Left Cell */
    tempRow = row;
    tempCol = col - 1;
    adjacentCellsIndex[0] = (tempCol >= 0) ? { row: tempRow, col: tempCol } : null;
    /*Top Left Cell */
    tempRow = row - 1;
    tempCol = col - 1;
    adjacentCellsIndex[1] = (tempCol >= 0 && tempRow >= 0) ? { row: tempRow, col: tempCol } : null
    /* Top Cell */
    tempRow = row - 1;
    tempCol = col;
    adjacentCellsIndex[2] = (tempRow >= 0) ? { row: tempRow, col: tempCol } : null;
    /* Top Right Cell */
    tempRow = row - 1;
    tempCol = col + 1;
    adjacentCellsIndex[3] = (tempCol <= 29 && tempRow >= 0) ? { row: tempRow, col: tempCol } : null;
    /* Right Cell */
    tempRow = row;
    tempCol = col + 1;
    adjacentCellsIndex[4] = (tempCol <= 29) ? { row: tempRow, col: tempCol } : null;
    /* Bottom Right */
    tempRow = row + 1;
    tempCol = col + 1;
    adjacentCellsIndex[5] = (tempCol <= 29 && tempRow <= 15) ? { row: tempRow, col: tempCol } : null;
    /* Bottom Right */
    tempRow = row + 1;
    tempCol = col;
    adjacentCellsIndex[6] = (tempRow <= 15) ? { row: tempRow, col: tempCol } : null;
    /* Bottom Left */
    tempRow = row + 1;
    tempCol = col - 1;
    adjacentCellsIndex[7] = (tempRow <= 15 && tempCol >= 0) ? { row: tempRow, col: tempCol } : null;
    return adjacentCellsIndex;
}