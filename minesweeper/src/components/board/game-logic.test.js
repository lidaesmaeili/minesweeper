import {
    getAdjacentCellsIndex,
    blowupBoard    
} from './game-logic';

/* Adjacent Cells Index Test*/
test('calculate adjacent cells for 0 0', () => {
    expect(getAdjacentCellsIndex(15,29,0, 0)).toStrictEqual([
        null,
        null,
        null,
        null,
        { row: 0, col: 1 },
        { row: 1, col: 1 },
        { row: 1, col: 0 },
        null
    ])
})

test('calculate adjacent cells for 0 29', () => {
    expect(getAdjacentCellsIndex(15,29,0, 29)).toStrictEqual([
        { row: 0, col: 28 },
        null,
        null,
        null,
        null,
        null,
        { row: 1, col: 29 },
        { row: 1, col: 28 }
    ])
})

test('calculate adjacent cells for 2 2', () => {
    expect(getAdjacentCellsIndex(15,29,2, 2)).toStrictEqual([
        { row: 2, col: 1 },
        { row: 1, col: 1 },
        { row: 1, col: 2 },
        { row: 1, col: 3 },
        { row: 2, col: 3 },
        { row: 3, col: 3 },
        { row: 3, col: 2 },
        { row: 3, col: 1 }
    ])
})
/* Blow Up Test */
const gameStateSample1 = [
    [
        { isOpened: false, hasMine: true, content: 5 },
        { isOpened: false, hasMine: false, content: 5 },
        { isOpened: false, hasMine: true, content: 5 }
    ],
    [
        { isOpened: false, hasMine: false, content: 5 },
        { isOpened: false, hasMine: true, content: 5 },
        { isOpened: false, hasMine: false, content: 5 }
    ],
    [
        { isOpened: false, hasMine: true, content: 5 },
        { isOpened: false, hasMine: false, content: 5 },
        { isOpened: false, hasMine: true, content: 5 }

    ]];
    const gameStateSampleChanged1 = [
        [
            { isOpened: true, hasMine: true, content: 2 },
            { isOpened: false, hasMine: false, content: 5 },
            { isOpened: true, hasMine: true, content: 2 }
        ],
        [
            { isOpened: false, hasMine: false, content: 5 },
            { isOpened: true, hasMine: true, content: 2 },
            { isOpened: false, hasMine: false, content: 5 }
        ],
        [
            { isOpened: true, hasMine: true, content: 2 },
            { isOpened: false, hasMine: false, content: 5 },
            { isOpened: true, hasMine: true, content: 2 }
    
        ]];


test('blow up board',()=>{
    blowupBoard(2,2,gameStateSample1);    
    expect(gameStateSample1).toStrictEqual(gameStateSampleChanged1);
})
/* Open Cell Test 1 */