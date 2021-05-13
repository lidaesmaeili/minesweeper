import { useState, FunctionComponent, Fragment, useEffect } from 'react';
import { Timer } from '../timer/timer';
import { Counter } from '../counter/counter';
import { Emoji } from '../emoji/emoji';
import { MineField } from '../mine-field/mine-field';
import { ICell } from '../../interfaces/ICell';
import { Content } from '../../enum/Content';
import { PlayerState } from '../../enum/player-state';
import { IPair, scatterMines, cleanField, isGameFinished } from './game-logic'
import './board.css';


export const Board: FunctionComponent = () => {

    const [logicalGameState, setlogicalGameState] = useState<[ICell[]] | null>(null);
    const [hasGameStarted, setIsGameStarted] = useState(false);
    const [isTimerStopped,setIsTimerStopped] = useState(false);
    const [remainingMines, setRemainingMines] = useState(99);
    const [playerState, setPlayerState] = useState<PlayerState>(PlayerState.notStarted);
    let isClickAllowed = true;

    useEffect(() => {
        setlogicalGameState(initGameState())
    }, []);

    const leftClickAction = (row: number, col: number): void => {
        if (!isClickAllowed)
            return;
        if (!hasGameStarted) {
            setMouseClicks(true)();
            scatterMines(row, col).then((pairs: IPair[]) => {
                setPlayerState(PlayerState.playing);
                setIsGameStarted(true);
                const newLogicalGameState = logicalGameState as [ICell[]];                
                pairs.forEach((p) => {
                    newLogicalGameState[p.row][p.col].hasMine = true;
                })                
                const result = cleanField(row, col, newLogicalGameState as [ICell[]]); 
                setlogicalGameState(result.newGameState);
                if (result.isExploded) {
                    setIsTimerStopped(true)
                    setMouseClicks(true)();
                    setPlayerState(PlayerState.lost);
                }
                else {
                    if (!isGameFinished(result.newGameState as [ICell[]])){
                        setMouseClicks(false)();
                    }
                    else{
                        setIsTimerStopped(true)
                        setMouseClicks(true)();
                        setPlayerState(PlayerState.won);
                    }
                }

            })
        }
        else {
            isClickAllowed = false;

            isClickAllowed = true;
        }
    }

    const setMouseClicks = (isDisabled: boolean): () => void => {
        if (isDisabled) {
            return () => {
                isClickAllowed = false;
            }
        }
        else {
            return () => {
                isClickAllowed = true;               
            }
        }
    }

    const rightClickAction = (row: number, col: number): void => {
        if(!isClickAllowed)
            return;
        if(logicalGameState == null)
            return;
        if(logicalGameState[row][col].isOpened)
            return;
        setMouseClicks(true)();
        const newLogicalGameState = logicalGameState;
        if(newLogicalGameState[row][col].content === Content.unopenedBlock){
            newLogicalGameState[row][col].content = Content.flag;
            setlogicalGameState(newLogicalGameState);
            setMouseClicks(false)();
            return;
        }
        else if(newLogicalGameState[row][col].content === Content.flag){
            newLogicalGameState[row][col].content = Content.questonMark;
            setlogicalGameState(newLogicalGameState);
            setMouseClicks(false)();
            return;
        }
        else if(newLogicalGameState[row][col].content === Content.questonMark){
            newLogicalGameState[row][col].content = Content.unopenedBlock;
            setlogicalGameState(newLogicalGameState);
            setMouseClicks(false)();
            return;
        }
        else{
            setMouseClicks(false)();
            return;
        }
    }

    const board = (
        <Fragment>
            <div className={'width-fill height-fill board-container'}>
                <div id={'top-bar'} className={'width-full'}>
                    <div className={'top-bar-item'}>
                        <Counter remainingMines={remainingMines} />
                    </div>
                    <div className={'top-bar-item'}>
                        <Emoji playerState={playerState} />
                    </div>
                    <div className={'top-bar-item'}>
                        <Timer isTimerStopped={isTimerStopped}
                         isTimerStarted={hasGameStarted} />
                    </div>
                </div>
                <MineField
                    leftClickAction={leftClickAction}
                    rightClickAction={rightClickAction} />
            </div>
        </Fragment>

    );
    return board;
}




const initGameState = (): [ICell[]] => {
    let gameState: [ICell[]] = [[]];
    for (let row = 0; row <= 15; row++) {
        gameState[row] = []
        for (let col = 0; col <= 29; col++) {
            const cell: ICell = {
                isOpened: false,
                content: Content.unopenedBlock,
                hasMine: false,
                adjacentMinesCount: 0
            }
            gameState[row][col] = cell;
        }
    }
    return gameState;
}