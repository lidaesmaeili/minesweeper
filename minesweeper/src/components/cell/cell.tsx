import { useState, FunctionComponent, useEffect } from 'react';
import { Content } from '../../enum/Content';
import { ClearedBlock } from '../cleared-block/cleared-block';
import { ExplodedMine } from '../exploded-mine/exploded-mine';
import { Flag } from '../flag/flag';
import { Number } from '../number/number'
import { QuestionMark } from '../question-mark/question-mark';
import { UnopenedBlock } from '../unopened-block/unopened-block';
import { gameStore } from '../../game-state-managment/game-state-managment';
import './cell.css';
import { ICell } from '../../interfaces/ICell';
import { cleanup } from '@testing-library/react';
export interface ICellParam {
    row: number;
    col: number;
    righClickAction: (row: number, col: number) => void;
    leftClickAction: (row: number, col: number) => void;
}

export const Cell: FunctionComponent<ICellParam> = (props) => {

    const setCellCss = (isOpened: boolean, content: Content): void => {
        const cellClass = 'cell'
        const solidBorder = 'solidBorder';
        const doteedBorder = 'dotedBorder';
        let cssClasses = cellClass;
        if (!isOpened) {
            cssClasses += ' ';
            cssClasses += solidBorder;
        }
        else {
            if (content === Content.explodedMine) {
                cssClasses += ' ';
                cssClasses += solidBorder;
            }
            else if (content === Content.number || content === Content.clearedBlock) {
                cssClasses += ' ';
                cssClasses += doteedBorder;
            }
        }
        setCssClasses(cssClasses)
    }

    const [cellId] =
        useState(`cell-${props.row.toString().padStart(2, '0')}${props.col.toString()
            .padStart(2, '0')}`)
    const [content, setContent] = useState<Content>(Content.unopenedBlock);
    const [isOpened, setIsOpened] = useState(false);
    const [row] = useState(props.row);
    const [col] = useState(props.col);
    const [adjacentMinesCount, setAdjacentMinesCount] = useState(0);
    const [cssClasses, setCssClasses] =
        useState<string>('solidBorder');   

    useEffect(() => {
        const unSubscribe = gameStore.subscribe(() => {
            if (gameStore.getState().gameState == null)
                return;
            const gameState = (gameStore.getState().gameState as unknown) as [ICell[]];
            const cellState = gameState[row][col];
            setContent(cellState.content);
            setIsOpened(cellState.isOpened);
            setCellCss(cellState.isOpened, cellState.content);
            if (cellState.adjacentMinesCount != null)
                setAdjacentMinesCount(cellState.adjacentMinesCount);
        });

        return () => {         
            unSubscribe();
        }
    }, [])




    const cell =
        <div
            className={cssClasses}
            id={cellId}
            onClick={() => { props.leftClickAction(row, col) }}
            onContextMenu={(e) => { e.preventDefault(); props.righClickAction(row, col); }}
        >
            {
                setCellContent(isOpened, content, adjacentMinesCount)
            }
        </div>
    return cell;
}

const setCellContent = (isOpened: boolean, content: Content, adjacentMinesCount: number)
    : JSX.Element => {
    if (isOpened) {
        if (content === Content.number) {
            return <Number value={adjacentMinesCount} />
        }
        else if (content === Content.explodedMine) {
            return <ExplodedMine />
        }
        else if (content === Content.clearedBlock) {
            return <ClearedBlock />
        }
    }
    else {
        if (content === Content.flag)
            return <Flag />;
        else if (content === Content.questonMark)
            return <QuestionMark />;
        else if (content === Content.unopenedBlock)
            return <UnopenedBlock />;
    }
    return <UnopenedBlock />;
}







