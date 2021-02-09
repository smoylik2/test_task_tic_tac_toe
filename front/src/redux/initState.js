export const initGameState = {
    result: {
        player: "X",
        ai: "O",
        board: [
            [
                1,
                2,
                3
            ],
            [
                4,
                5,
                6
            ],
            [
                7,
                8,
                9
            ]
        ],
        nextMove: "X"
    },
    history: [],
    message: `Game has been started!`
};

export const initScoreState = {
    ai: 0,
    player: 0,
    X: 0,
    O: 0,
    list: []
};