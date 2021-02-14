import React, { FunctionComponent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api/api';
import { GameType } from '../../types';
interface GameEditorProps { };

const GameEditor: FunctionComponent<GameEditorProps> = () => {
    const params = useParams();
    const [game, setGame] = useState<GameType>({ name: "", pgn: "" });

    console.log(params);
    // console.log(params.gameId); // how to access specific param?
    console.log(game);

    useEffect(() => {
        api.get('/games/'
        ).then((response) => {
            setGame(response.data);
        }).catch((error) => {
            console.log(error);
        }).finally(() => {
            console.log('finally')
        })
    }, []);
    return (
        <div>
            gameeditor
        </div>
    )
}

export default GameEditor;
