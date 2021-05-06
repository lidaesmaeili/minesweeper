import React, { useState, useEffect, FunctionComponent } from 'react';
import {ICell} from '../../interfaces/ICell';

export interface IMineFieldPram {
    rightClickAction: (row: number, col: number) => void;
    leftClickAction: (row:number, col:number) =>void;
    gameState:[ICell[]];
}
export const MineField: FunctionComponent <IMineFieldPram> = (props) => {
    return <h1></h1>
}