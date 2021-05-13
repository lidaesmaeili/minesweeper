import React, { useState, useEffect, FunctionComponent } from 'react';
import { Lcd } from '../3-digit-lcd/3-digit-lcd';
export interface ITimerParam {
    isTimerStarted: boolean
    isTimerStopped: boolean;
}
export const Timer: FunctionComponent<ITimerParam> = (props) => {

    const [remainingTime, setRemainingTime] = useState(999);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (props.isTimerStarted) {
            interval = setInterval(() => {
                if (remainingTime - 1 >= 0)
                    setRemainingTime(remainingTime - 1);
                else
                    clearInterval(interval)
            }, 1000)
            if (props.isTimerStopped) {
                clearInterval(interval);
            }
        }
        return function clearTimeout() {
            clearInterval(interval)
        }
    })

    const timer =
        <div className={'Lcd-container'}>
            <Lcd value={remainingTime} />
        </div>
    return timer;
}
