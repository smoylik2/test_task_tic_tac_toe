import React, {useEffect} from 'react';
import s from './app.module.scss'
import {Route, Switch} from "react-router-dom";
import Helmet from "react-helmet";
import {useDispatch} from "react-redux";
import GameScreen from "./components/GameScreen/GameScreen";
import ScoreScreen from "./components/ScoreScreen/ScoreScreen";
import Navigation from "./components/Navigation/Navigation";
import {setInitServerData} from "./redux/actions";


function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setInitServerData())
    }, []);


    return (
        <div className={s.App}>
            <Helmet>
                <title>{`Tic-Tac-Toe`}</title>
            </Helmet>
            <Route path="*">
                <Navigation/>
                <Switch>
                    <Route path='/score'
                           component={ScoreScreen} exact/>
                    <Route path='/'
                           component={GameScreen}/>
                </Switch>
            </Route>
        </div>
    );
}

export default App;
