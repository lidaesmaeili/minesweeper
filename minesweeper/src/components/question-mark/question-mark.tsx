import React,{useState,useEffect,FunctionComponent} from 'react';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
export const QuestionMark:FunctionComponent = ()=>{
    const questionMark =
        <div className={`width-full height-full center c6c6c6-back-color`}>
            <HelpOutlineOutlinedIcon style={{color:'blue'}}/>
        </div>
    return questionMark;
}