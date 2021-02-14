import React, { FunctionComponent } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import About from '../../components/about/About';
import Account from '../../components/account/Account';
import Home from '../../components/home/Home';
import Sidebar from '../../components/sidebar/Sidebar';
import Games from '../games/Games';
import CreateGame from '../games/CreateGame';
import Players from '../player/Players';
import SearchGame from '../games/SearchGame';
import UpdateGame from '../games/UpdateGame';
import GameEditor from '../../components/game/GameEditor';

interface MainContentProps { };

const MainContent: FunctionComponent<MainContentProps> = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-2 mt-2">
                    <Sidebar />
                </div>
                <div className="ml-auto mt-3 col-9">
                    <Switch>
                        {/* /home/games */}
                        <Route path="/home/games/search" component={SearchGame} />
                        <Route path="/home/games/create" component={CreateGame} />
                        <Route path="/home/games/update" component={UpdateGame} />
                        <Route path="/home/games/:gameId" component={GameEditor} />
                        <Route path="/home/games" component={Games} />

                        { /* /home/players */}
                        <Route path="/home/players" component={Players} />
                        <Route path="/home" component={Home} />

                        {/* /about */}
                        <Route path="/about" component={About} />

                        {/* /account */}
                        <Route path="/account" component={Account} />

                        {/* redirects */}
                        <Redirect to="/" />
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default MainContent;
