import React, { MouseEvent } from 'react';
import GameForm from '../../components/game/GameForm';

const UpdateGame = () => {
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
