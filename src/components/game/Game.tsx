import React, { FunctionComponent } from 'react';
import { GameType } from '../../types';

interface GameProps {
    game: GameType;
};

const Game: FunctionComponent<GameProps> = ({ game }) => {

    /**********
     * Render
     **********/

    // slice part of game
    const maxLength = 35;
    const gameSlice = game.pgn.length > maxLength ? game.pgn.slice(0, maxLength) + "..." : game.pgn;

    return (
        <div className="card mb-3">
            <div className="card-header">
                <div className="row">
                    <div className="col">
                        <p className="d-inline">{game.time}</p>
                    </div>
                    <div className="col">
                        <button className="btn btn-danger float-right">X</button>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <h4 className="card-title">{game.name}</h4>
                <p className="card-text">{gameSlice}</p>
                <button className="btn btn-primary">Read More</button>
            </div>
        </div>
    )
}

export default Game;
