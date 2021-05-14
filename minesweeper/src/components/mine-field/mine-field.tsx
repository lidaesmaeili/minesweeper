import { FunctionComponent, useEffect } from 'react';
import { ICell } from '../../interfaces/ICell';
import { Cell } from '../cell/cell';
import './mine-field.css';
import {gameStore} from '../../game-state-managment/game-state-managment';

export interface IMineFieldPram {
    rightClickAction: (row: number, col: number) => void;
    leftClickAction: (row: number, col: number) => void;    
    gameState:[ICell[]]
}

export const MineField: FunctionComponent<IMineFieldPram> = (props) => {

    useEffect(()=>{        
        gameStore.dispatch({type:props.gameState});
    });
    
    const mineField =
        <div className={'width-fill'}>
            <div className={'mine-field'}>
                {createMineField(props.leftClickAction, props.rightClickAction)}
            </div>
        </div>
    return mineField;
}

const createMineField = (
    leftClickAction: (row: number, col: number) => void
    , rightClickAction: (row: number, col: number) => void): JSX.Element[] => {
    const lines: JSX.Element[] = [];
    for (let i = 0; i <= 15; i++) {
        const line = (
            <div className={'line'} key={i}>
                {
                    ((): JSX.Element[] => {
                        const cells: JSX.Element[] = [];
                        for (let j = 0; j <= 29; j++) {
                            const cell = <Cell
                                row={i}
                                col={j}
                                leftClickAction={leftClickAction}
                                righClickAction={rightClickAction}
                                key = {j}
                            />
                            cells.push(cell);
                        }
                        return cells;
                    })()
                }
            </div>
        );
        lines.push(line);
    }
    return lines;
}