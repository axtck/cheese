import React, { FunctionComponent, MouseEvent } from 'react';
import GameForm from '../../components/game/GameForm';

interface UpdateGameProps { };

const UpdateGame: FunctionComponent<UpdateGameProps> = () => {
    const handleBtnClicked = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log('update');
    }

    return (
        <div>
            update game
            <GameForm formType="update" onBtnClick={handleBtnClicked} />
        </div>
    )
}

export default UpdateGame;
