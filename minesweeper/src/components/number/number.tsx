import  { useState, useEffect, FunctionComponent } from 'react';
export interface INumberParam {
    value: number
}
export const Number: FunctionComponent<INumberParam> = (props) => {
    const [value] = useState<number>(props.value);
    const [color, setColor] = useState<string>('');
    useEffect(() => {
        if (props.value === 1) {
            setColor('blue-color');
        }
        else if (props.value === 2) {
            setColor('green-color');
        }
        else if (props.value === 3) {
            setColor('maroon-color');
        }
        else if (props.value === 4) {
            setColor('gray-color');
        }
        else if (props.value === 5) {
            setColor('firebrick-color');
        }
        else if (props.value === 6) {
            setColor('indigo-color');
        }
        else if (props.value === 7) {
            setColor('tomato-color');
        }
        else if (props.value === 8) {
            setColor('brown-color');
        }
    });

    const number = 
    <div className={`width-full height-full wheat-back-color ${color}    
     center`} style={{fontFamily:'Digital'}}>
        {value}
    </div>
    return number;
}