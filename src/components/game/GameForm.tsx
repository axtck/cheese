import React, { MouseEvent } from 'react';

interface GameFormProps {
    formType: string;
    onBtnClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

const GameForm = ({ formType, onBtnClick }: GameFormProps) => {


    /**********
     * Render
     **********/

    // capitalize first letter
    const titleFormType = formType.charAt(0).toUpperCase() + formType.slice(1);

    // capitalize all letters
    const capFormType = formType.toUpperCase();
    return (
        <div>
            <h3>{titleFormType} game.</h3>
            Create game form

            <button className="btn btn-primary" onClick={onBtnClick}>{capFormType}</button>

        </div>
    )
}

export default GameForm;
