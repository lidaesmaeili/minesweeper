import {useState,FunctionComponent} from 'react';
import { Content } from '../../enum/Content';
import { ClearedBlock } from '../cleared-block/cleared-block';
import { ExplodedMine } from '../exploded-mine/exploded-mine';
import { Flag } from '../flag/flag';
import {Number} from '../number/number'
import { QuestionMark } from '../question-mark/question-mark';
import {UnopenedBlock} from '../unopened-block/unopened-block';
import './cell.css';
export interface ICellParam{
    row:number;
    col:number;
    righClickAction:(row:number,col:number)=>void;
    leftClickAction:(row:number,col:number)=>void;
}

export const Cell:FunctionComponent<ICellParam> = (props)=>{
    const [cellId] = 
    useState(`cell-${props.row.toString().padStart(2,'0')}${props.col.toString().padStart(2,'0')}`)
    const [content,setContent] = useState<Content>(Content.unopenedBlock);
    const [isOpened,setIsOpened] = useState(false);   
    const[row] = useState(props.row);
    const [col] = useState(props.col);
    const [adjacentMinesCount,setAdjacentMinesCount] = useState(0);
    const [cssClasses,setCssClasses] = useState<string>(solidBorder);

    const cell = 
     <div
     className = {cssClasses} 
      id={cellId}
      onClick={()=>{props.leftClickAction(row,col)}}>
         {
             (isOpened===true)?((content===Content.number)?
             <Number value={adjacentMinesCount} />:((content===Content.explodedMine)?
             <ExplodedMine/>:<ClearedBlock/>)):((content===Content.flag)?<Flag/>
             :((content===Content.questonMark)?<QuestionMark/>:<UnopenedBlock/>))
         }
     </div>
     return cell;
}

const createCellCss = (isOpened:boolean, content:Content):()=>string=>{
    const solidBorder = 'solidBorder';
    const doteedBorder = 'dotedBorder';
}

