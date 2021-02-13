import React, { FunctionComponent } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import About from '../../components/about/About';
import Contact from '../../components/contact/Contact';

import Home from '../../components/home/Home';
import Sidebar from '../../components/sidebar/Sidebar';
import Games from '../games/Games';
import CreateGame from '../games/CreateGame';
import Players from '../player/Players';

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
                        {/* home */}
                        <Route path="/home/games/create" component={CreateGame} />
                        <Route path="/home/games" component={Games} />
                        <Route path="/home/players" component={Players} />
                        <Route path="/home" component={Home} />

                        {/* about */}
                        <Route path="/about" component={About} />

                        {/* contact */}
                        <Route path="/contact" component={Contact} />

                        {/* redirects */}
                        <Redirect to="/" />
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default MainContent;
