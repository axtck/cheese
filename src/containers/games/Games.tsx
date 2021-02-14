import React, { FunctionComponent, useEffect, useState } from 'react';
import api from '../../api/api';
import Game from '../../components/game/Game';
import { GameType } from '../../types';

interface GamesProps { };

const Games: FunctionComponent<GamesProps> = () => {
    const [games, setGames] = useState<Array<GameType>>([{ name: "", pgn: "" }]);

    useEffect(() => {
        api.get('/games'
        ).then((response) => {
            setGames(response.data);
        }).catch((error) => {
            console.log(error);
        }).finally(() => {
            console.log('finally')
        })
    }, []);


    /***********
     * Render
     ***********/

    const mappedGames = games.map((g, i) => {
        return <Game
            key={i}
            game={g}
        />
    })

    return (
        <div>
            <h3>Games</h3>
            {mappedGames}
        </div>
    )
}

export default Games;
