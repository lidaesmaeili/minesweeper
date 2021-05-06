import React, { useState, useEffect, FunctionComponent, Fragment } from 'react';
import { Timer } from '../timer/timer';
import { Counter } from '../counter/counter';
import { Emoji } from '../emoji/emoji';
import { MineField } from '../mine-field/mine-field';
import { ICell } from '../../interfaces/ICell';
import { Content } from '../../enum/Content';
import {PlayerState} from '../../enum/player-state';

export const Board: FunctionComponent = () => {
    const [gameState, setGameState] = useState<[ICell[]]>(initGameState());
    const [isGameStarted, setIsGameStarted] = useState(false);
    const [remainingMines,setRemainingMines] = useState(99);
    const [playerState,setPlayerState] = useState<PlayerState>(PlayerState.notStarted)
    const board = (
        <Fragment>
            <Counter remainingMines = {remainingMines}/>
            <Emoji playerState = {playerState} />
            <Timer isTimerStarted = {isGameStarted} />
            <MineField
             leftClickAction = {leftClickAction}
             rightClickAction = {rightClickAction}
             gameState={gameState}/>
        </Fragment>
    );
    return board;
}

const leftClickAction = (row: number, col: number): void => {

}

const rightClickAction = (row:number, col:number):void =>{

}

const initGameState = (): [ICell[]] => {
    let gameState: [ICell[]] = [[]];
    for (let row = 0; row <= 15; row++) {
        for (let col = 0; col <= 29; col++) {
            const cell: ICell = {
                isOpened: false,
                content: Content.unopenedBlock,
                hasMine: false
            }
            gameState[row][col] = cell;
        }
    }
    return gameState;
}