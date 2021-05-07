export interface IPair{
    row:number;
    col:number;
}
export const scatterMines = (safeRow:number, safeCol:number):
 Promise<IPair[]> => {
    return new Promise((resolve)=>{
        const reservedCells : [boolean[]] = [[]];
        const pairs:IPair[]=[];
        let counter = 0;
        while(counter<99){
            const randomCol = Math.floor(Math.random()*30);
            const randomRow = Math.floor(Math.random()*16);
            if(randomCol===safeCol && randomRow===safeRow)
                continue;
            if(reservedCells[randomRow] && reservedCells[randomRow][randomCol])
                continue;

            reservedCells[randomRow] = [];
            reservedCells[randomRow][randomCol] = true;
            pairs.push({row:randomRow, col:randomCol });
            counter+=1;
        }
        console.log('scattered',pairs);
        console.log('mines count',pairs.length);
        resolve(pairs);
    });
}