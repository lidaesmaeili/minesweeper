import { useState, FunctionComponent, useEffect } from 'react';
import './3-digit-lcd.css';
export interface ILcdParam {
    value: number
}
export const Lcd: FunctionComponent<ILcdParam> = (props) => {
    const [value, setValue] = useState(valueConvertor(props.value));
    useEffect(() => {       
        setValue(valueConvertor(props.value));
    }, [props.value])
    const lcd =
        <div className={'lcd'}>
            {value}
        </div>
    return lcd;
}

const valueConvertor = (value: number): string => {
    return value.toString().padStart(3, '0');
}