import { FunctionComponent } from 'react';
import { Content } from '../../enum/Content';
import { Cell } from '../cell/cell';

export interface IMineFieldPram {
    rightClickAction: (row: number, col: number) => void;
    leftClickAction: (row: number, col: number) => void;
}
export const MineField: FunctionComponent<IMineFieldPram> = (props) => {
    const mineField =
        <div>
            {createMineField(props.leftClickAction,props.rightClickAction)}
        </div>
    return mineField;
}

const createMineField = (
    leftClickAction: (row: number, col: number) => void
    , rightClickAction: (row: number, col: number) => void): JSX.Element[] => {
    const lines: JSX.Element[] = [];
    for (let i = 0; i <= 15; i++) {
        const line = (
            <div>
                {
                    ((): JSX.Element[] => {
                        const cells: JSX.Element[] = [];
                        for (let j = 0; j <= 29; j++) {
                            const cell = <Cell
                                row={i}
                                col={j}                              
                                leftClickAction={leftClickAction}
                                righClickAction={rightClickAction}
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