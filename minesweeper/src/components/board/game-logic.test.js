import {
    getAdjacentCellsIndex,
    blowupBoard,
    openCell
} from './game-logic';

/* Adjacent Cells Index Test*/
test('calculate adjacent cells for 0 0', () => {
    expect(getAdjacentCellsIndex(15, 29, 0, 0)).toStrictEqual([
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
    expect(getAdjacentCellsIndex(15, 29, 0, 29)).toStrictEqual([
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
    expect(getAdjacentCellsIndex(15, 29, 2, 2)).toStrictEqual([
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
const blowUpSample1 = [
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
const blowUpSampleResult1 = [
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


test('blow up board', () => {
    blowupBoard(2, 2, blowUpSample1);
    expect(blowUpSample1).toStrictEqual(blowUpSampleResult1);
})
/* Open Cell Test 1 */
const openCellSample1 =
    [
        [
            { isOpened: false, hasMine: true, adjacentMinesCount: null, content: 5 },
            { isOpened: false, hasMine: true, adjacentMinesCount: null, content: 5 },
            { isOpened: false, hasMine: true, adjacentMinesCount: null, content: 5 },
        ],
        [
            { isOpened: false, hasMine: true, adjacentMinesCount: null, content: 5 },
            { isOpened: false, hasMine: false, adjacentMinesCount: null, content: 5 },
            { isOpened: false, hasMine: false, adjacentMinesCount: null, content: 5 },
        ],
        [
            { isOpened: false, hasMine: true, adjacentMinesCount: null, content: 5 },
            { isOpened: false, hasMine: false, adjacentMinesCount: null, content: 5 },
            { isOpened: false, hasMine: false, adjacentMinesCount: null, content: 5 },
        ]
    ]
const opeCellSampleResult1 =
    [
        [
            { isOpened: false, hasMine: true, adjacentMinesCount: null, content: 5 },
            { isOpened: false, hasMine: true, adjacentMinesCount: null, content: 5 },
            { isOpened: false, hasMine: true, adjacentMinesCount: null, content: 5 },
        ],
        [
            { isOpened: false, hasMine: true, adjacentMinesCount: null, content: 5 },
            { isOpened: true, hasMine: false, adjacentMinesCount: 5, content: 3 },
            { isOpened: true, hasMine: false, adjacentMinesCount: 2, content: 3 },
        ],
        [
            { isOpened: false, hasMine: true, adjacentMinesCount: null, content: 5 },
            { isOpened: true, hasMine: false, adjacentMinesCount: 2, content: 3 },
            { isOpened: true, hasMine: false, adjacentMinesCount: null, content: 4 },
        ]
    ]
test('open cell 2,2 clicked!', () => {
    openCell(2, 2, 2, 2, openCellSample1);
    expect(openCellSample1).toStrictEqual(opeCellSampleResult1);
})

/* Open Cell Test 2 */

const openCellSample2 =
    [
        [
            { isOpened: false, hasMine: true, adjacentMinesCount: null, content: 5 },
            { isOpened: false, hasMine: true, adjacentMinesCount: null, content: 5 },
            { isOpened: false, hasMine: true, adjacentMinesCount: null, content: 5 },
        ],
        [
            { isOpened: false, hasMine: true, adjacentMinesCount: null, content: 5 },
            { isOpened: false, hasMine: false, adjacentMinesCount: null, content: 5 },
            { isOpened: false, hasMine: false, adjacentMinesCount: null, content: 5 },
        ],
        [
            { isOpened: false, hasMine: true, adjacentMinesCount: null, content: 5 },
            { isOpened: false, hasMine: false, adjacentMinesCount: null, content: 5 },
            { isOpened: false, hasMine: false, adjacentMinesCount: null, content: 5 },
        ]
    ]

const opeCellSampleResult2 =
    [
        [
            { isOpened: false, hasMine: true, adjacentMinesCount: null, content: 5 },
            { isOpened: false, hasMine: true, adjacentMinesCount: null, content: 5 },
            { isOpened: false, hasMine: true, adjacentMinesCount: null, content: 5 },
        ],
        [
            { isOpened: false, hasMine: true, adjacentMinesCount: null, content: 5 },
            { isOpened: true, hasMine: false, adjacentMinesCount: 5, content: 3 },
            { isOpened: false, hasMine: false, adjacentMinesCount: null, content: 5 },
        ],
        [
            { isOpened: false, hasMine: true, adjacentMinesCount: null, content: 5 },
            { isOpened: false, hasMine: false, adjacentMinesCount: null, content: 5 },
            { isOpened: false, hasMine: false, adjacentMinesCount: null, content: 5 },
        ]
    ];
test('open cell 1,1 clicked!', () => {
    openCell(2, 2, 1, 1, openCellSample2);
    expect(openCellSample2).toStrictEqual(opeCellSampleResult2);
})

/* Open Cell Test 3 */
const openCellSample3 =
    [
        [
            { isOpened: false, hasMine: true, adjacentMinesCount: null, content: 5 },
            { isOpened: false, hasMine: true, adjacentMinesCount: null, content: 5 },
            { isOpened: false, hasMine: true, adjacentMinesCount: null, content: 5 },
        ],
        [
            { isOpened: false, hasMine: true, adjacentMinesCount: null, content: 5 },
            { isOpened: false, hasMine: false, adjacentMinesCount: null, content: 5 },
            { isOpened: false, hasMine: false, adjacentMinesCount: null, content: 5 },
        ],
        [
            { isOpened: false, hasMine: true, adjacentMinesCount: null, content: 5 },
            { isOpened: false, hasMine: false, adjacentMinesCount: null, content: 5 },
            { isOpened: false, hasMine: false, adjacentMinesCount: null, content: 5 },
        ]
    ]

const opeCellSampleResult3 =
    [
        [
            { isOpened: false, hasMine: true, adjacentMinesCount: null, content: 5 },
            { isOpened: false, hasMine: true, adjacentMinesCount: null, content: 5 },
            { isOpened: false, hasMine: true, adjacentMinesCount: null, content: 5 },
        ],
        [
            { isOpened: false, hasMine: true, adjacentMinesCount: null, content: 5 },
            { isOpened: false, hasMine: false, adjacentMinesCount: null, content: 5 },
            { isOpened: false, hasMine: false, adjacentMinesCount: null, content: 5 },
        ],
        [
            { isOpened: false, hasMine: true, adjacentMinesCount: null, content: 5 },
            { isOpened: true, hasMine: false, adjacentMinesCount: 2, content: 3 },
            { isOpened: false, hasMine: false, adjacentMinesCount: null, content: 5 },
        ]
    ];

test('open cell 2,1 clicked!', () => {
    openCell(2, 2, 2, 1, openCellSample3);
    expect(openCellSample3).toStrictEqual(opeCellSampleResult3);
})

/* Open Cell Test 4 */
const openCellSample4 =
    [
        [
            { isOpened: false, hasMine: true, adjacentMinesCount: null, content: 5 },
            { isOpened: false, hasMine: true, adjacentMinesCount: null, content: 5 },
            { isOpened: false, hasMine: true, adjacentMinesCount: null, content: 5 },
        ],
        [
            { isOpened: false, hasMine: true, adjacentMinesCount: null, content: 5 },
            { isOpened: false, hasMine: false, adjacentMinesCount: null, content: 5 },
            { isOpened: false, hasMine: false, adjacentMinesCount: null, content: 5 },
        ],
        [
            { isOpened: false, hasMine: true, adjacentMinesCount: null, content: 5 },
            { isOpened: false, hasMine: false, adjacentMinesCount: null, content: 5 },
            { isOpened: false, hasMine: false, adjacentMinesCount: null, content: 5 },
        ]
    ]

const opeCellSampleResult4 =
    [
        [
            { isOpened: false, hasMine: true, adjacentMinesCount: null, content: 5 },
            { isOpened: false, hasMine: true, adjacentMinesCount: null, content: 5 },
            { isOpened: false, hasMine: true, adjacentMinesCount: null, content: 5 },
        ],
        [
            { isOpened: false, hasMine: true, adjacentMinesCount: null, content: 5 },
            { isOpened: false, hasMine: false, adjacentMinesCount: null, content: 5 },
            { isOpened: true, hasMine: false, adjacentMinesCount: 2, content: 3 },
        ],
        [
            { isOpened: false, hasMine: true, adjacentMinesCount: null, content: 5 },
            { isOpened: false, hasMine: false, adjacentMinesCount: null, content: 5 },
            { isOpened: false, hasMine: false, adjacentMinesCount: null, content: 5 },
        ]
    ];

test('open cell 1,2 clicked!', () => {
    openCell(2, 2, 1, 2, openCellSample4);
    expect(openCellSample4).toStrictEqual(opeCellSampleResult4);
})

/* Open Cell Test 5 */
const openCellSample5 =
    [
        [
            { isOpened: false, hasMine: false, adjacentMinesCount: null, content: 5 },
            { isOpened: false, hasMine: false, adjacentMinesCount: null, content: 5 },
            { isOpened: false, hasMine: false, adjacentMinesCount: null, content: 5 },
        ],
        [
            { isOpened: false, hasMine: false, adjacentMinesCount: null, content: 5 },
            { isOpened: false, hasMine: false, adjacentMinesCount: null, content: 5 },
            { isOpened: false, hasMine: false, adjacentMinesCount: null, content: 5 },
        ],
        [
            { isOpened: false, hasMine: false, adjacentMinesCount: null, content: 5 },
            { isOpened: false, hasMine: false, adjacentMinesCount: null, content: 5 },
            { isOpened: false, hasMine: false, adjacentMinesCount: null, content: 5 },
        ]
    ]

    const opeCellSampleResult5 =
    [
        [
            { isOpened: true, hasMine: false, adjacentMinesCount: null, content: 4 },
            { isOpened: true, hasMine: false, adjacentMinesCount: null, content: 4 },
            { isOpened: true, hasMine: false, adjacentMinesCount: null, content: 4 },
        ],
        [
            { isOpened: true, hasMine: false, adjacentMinesCount: null, content: 4 },
            { isOpened: true, hasMine: false, adjacentMinesCount: null, content: 4 },
            { isOpened: true, hasMine: false, adjacentMinesCount: null, content: 4 },
        ],
        [
            { isOpened: true, hasMine: false, adjacentMinesCount: null, content: 4 },
            { isOpened: true, hasMine: false, adjacentMinesCount: null, content: 4 },
            { isOpened: true, hasMine: false, adjacentMinesCount: null, content: 4 },
        ]
    ];

    test('open cell 2,2 clicked - All cleared!', () => {
        openCell(2, 2, 2, 2, openCellSample5);
        expect(openCellSample5).toStrictEqual(opeCellSampleResult5);
    })