import React,{useState,useEffect,FunctionComponent} from 'react';
import {PlayerState} from '../../enum/player-state'
export interface IEmojiParam{
    playerState:PlayerState
}
export const Emoji:FunctionComponent<IEmojiParam> = (props)=>{
    return <h1></h1>
}