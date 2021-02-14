import React, { FunctionComponent } from 'react';
import GameForm from '../../components/game/GameForm';
import { GameType } from '../../types';

interface UpdateGameProps { };

const UpdateGame: FunctionComponent<UpdateGameProps> = () => {
    
    const handleBtnClicked = (game: GameType): void => {
        console.log(game);
    }

    return (
        <div>
            <GameForm formType="update" onBtnClick={handleBtnClicked} />
        </div>
    )
}

export default UpdateGame;
