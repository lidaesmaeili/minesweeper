import {getAdjacentCellsIndex,IPair} from './game-logic';

test('calculate adjacent cells for 0 0',()=>{
    expect(getAdjacentCellsIndex(0,0)).toStrictEqual([
        null,
        null,
        null,
        null,
        {row:0,col:1},
        {row:1,col:1},
        {row:1,col:0},
        null
    ])
})

test('calculate adjacent cells for 0 29',()=>{
    expect(getAdjacentCellsIndex(0,29)).toStrictEqual([
        {row:0,col:28},
        null,
        null,
        null,
        null,
        null,
        {row:1,col:29},
        {row:1,col:28}
    ])
})

test('calculate adjacent cells for 2 2',()=>{
    expect(getAdjacentCellsIndex(2,2)).toStrictEqual([
        {row:2,col:1},
        {row:1,col:1},
        {row:1,col:2},
        {row:1,col:3},
        {row:2,col:3},
        {row:3,col:3},
        {row:3,col:2},
        {row:3,col:1}
    ])
})