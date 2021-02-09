import React from 'react';
import GameTitle from "../GameScreen/GameTitle/GameTitle";
import ScoreHistory from "./ScoreHistory/ScoreHistory";

const ScoreScreen = () => {
    return (<>
            <GameTitle messageLine={false}/>
            <ScoreHistory/>
        </>
    )
};

export default ScoreScreen;