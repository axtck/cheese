import React, { MouseEvent } from 'react';
import GameForm from '../../components/game/GameForm';

const CreateGame = () => {
    const handleBtnClicked = (e: MouseEvent<HTMLButtonElement>) => {
        console.log('clicked');
    }
    
    return (
        <div>
            Submit game
            <GameForm formType="create" onBtnClick={handleBtnClicked} />
        </div>
    )
}

export default CreateGame;
