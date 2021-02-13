import React, { FunctionComponent, MouseEvent } from 'react';
import GameForm from '../../components/game/GameForm';

interface CreateGameProps {};

const CreateGame: FunctionComponent<CreateGameProps> = () => {
    const handleBtnClicked = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
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
