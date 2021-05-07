import {useState,FunctionComponent} from 'react';
import './3-digit-lcd.css';
export interface ILcdParam{
    value:number
}
export const Lcd:FunctionComponent<ILcdParam> = (params)=>{
    const [value,setValue] = useState(valueConvertor(params.value));

    const lcd = 
    <div className={'lcd'}>
        {value}
    </div>
    return lcd;
}

const valueConvertor = (value:number):string =>{
    return value.toString().padStart(3,'0');
}