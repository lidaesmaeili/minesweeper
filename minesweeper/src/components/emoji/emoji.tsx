import React, { useState, useEffect, FunctionComponent } from 'react';
import { PlayerState } from '../../enum/player-state'
import './emoji.css';
export interface IEmojiParam {
    playerState: PlayerState
}
export const Emoji: FunctionComponent<IEmojiParam> = (props) => {
    const [playerState, setPlayerState] =
        useState<PlayerState>(PlayerState.notStarted)
    const emoji =
        <div id={'emoji-btn'}
            className={(playerState === PlayerState.notStarted ||
                playerState === PlayerState.playing) ? 'jester' :
                ((playerState === PlayerState.lost) ?
                    'skull' : 'victory')}>

        </div>
    return emoji;
}