import React, { FunctionComponent, MouseEvent } from 'react';
import { GameType } from '../../types';
import api from '../../api/api';
import { useHistory } from 'react-router-dom';

interface GameProps {
    game: GameType;
};

const Game: FunctionComponent<GameProps> = ({ game }) => {
    const history = useHistory();

    const handleDeleted = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        api.delete('/games/qsfd' + game.gameId
        ).then((response) => {
            console.log(response);
            history.go(0);
        }).catch((error) => {
            console.log(error);
            history.go(0);
        });
    }

    const handleDetailClicked = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        history.push('/home/games/' + game.gameId);
    }

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
                        <button className="btn btn-danger float-right" onClick={handleDeleted}>X</button>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <h4 className="card-title">{game.name}</h4>
                <p className="card-text">{gameSlice}</p>
                <button className="btn btn-primary" onClick={handleDetailClicked}>OPEN</button>
            </div>
        </div>
    )
}

export default Game;
