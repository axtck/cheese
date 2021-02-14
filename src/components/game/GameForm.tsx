import React, { ChangeEvent, FunctionComponent, MouseEvent, useState, useEffect } from 'react';
import { GameType } from '../../types';

interface GameFormProps {
    formType: string;
    onBtnClick: (game: GameType) => void;
}

const GameForm: FunctionComponent<GameFormProps> = ({ formType, onBtnClick }) => {

    // inputs state
    const [game, setGame] = useState<GameType>({ pgn: "", name: "" });

    // validation state
    const [valid, setValid] = useState<Boolean>(false);
    const [validClass, setValidClass] = useState<string>("");

    // setting validation based on input
    useEffect(() => {
        if (game.pgn) {
            setValid(true);
        } else {
            setValid(false);
        }
    }, [game]);

    // setting class based on validation
    useEffect(() => {
        valid ? setValidClass("btn btn-success") : setValidClass("btn btn-danger");
    }, [valid]);

    const handleTextAreaChanged = (e: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault();

        // set PGN to target value
        setGame({
            ...game,
            [e.target.name]: e.target.value,
        });
    }

    const handleBtnClicked = (e: MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();

        // click create/update when valid
        if (valid) {
            onBtnClick(game);
        }
    }

    /**********
     * Render
     **********/

    // capitalize first letter
    const titleFormType = formType.charAt(0).toUpperCase() + formType.slice(1);

    // capitalize all letters
    const capFormType = formType.toUpperCase();

    return (
        <form>
            <div className="form-group">
                <h3>{titleFormType} game.</h3>
                <label className="mt-3" htmlFor="input-name">PGN</label>
                <input className="form-control" type="text" value={game.name} id="input-name" name="name" onChange={handleTextAreaChanged}></input>
                <label className="mt-3" htmlFor="textarea-moves">PGN</label>
                <textarea className="form-control" value={game.pgn} id="textarea-moves" rows={3} name="pgn" onChange={handleTextAreaChanged}></textarea>
            </div>
            <button className={validClass} onClick={handleBtnClicked}>{capFormType}</button>
        </form>
    )
}

export default GameForm;
