import {createStore} from 'redux';

function gameStateReducer(state = {gameState:[[]]},action){
    if(action)
        return {gameState:action.type};
    return state;
}

export let gameStore = createStore(gameStateReducer);