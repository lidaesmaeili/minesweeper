import React,{useState,useEffect,FunctionComponent} from 'react';
import { Lcd } from '../3-digit-lcd/3-digit-lcd';
export interface ITimerParam{
    isTimerStarted:boolean
}
export const Timer:FunctionComponent<ITimerParam> = (props)=>{

    const [remainingTime,setRemainingTime] = useState(999);
    const [isTimerStarted,setIsTimerStarted] = useState(props.isTimerStarted);
    
    const timer = 
     <div className={'Lcd-container'}>
         <Lcd value = {remainingTime}/>
     </div>
     return timer;
}
