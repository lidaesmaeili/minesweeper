import {useState,FunctionComponent} from 'react';
import {Lcd} from '../3-digit-lcd/3-digit-lcd';
export interface ICounterParam{
    remainingMines:number
}
export const Counter:FunctionComponent<ICounterParam> = (props)=>{

    const [remainingMines,setRemainingMines] =
     useState(props.remainingMines);

    const counter = 
    <div className={'Lcd-container'}>
        <Lcd value={remainingMines}/>
    </div>

    return counter;
}