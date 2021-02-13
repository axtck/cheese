import React, { ChangeEvent, FunctionComponent, MouseEvent, useState } from 'react';

interface GameFormProps {
    formType: string;
    onBtnClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

// game info
interface GameInfoProps {
    whitePlayer: string;
    blackPlayer: string;
}

const GameForm: FunctionComponent<GameFormProps> = ({ formType, onBtnClick }) => {
    const [gameInfo, setGameInfo] = useState<GameInfoProps>({ whitePlayer: "", blackPlayer: "" });

    const handelSelectChanged = (e: ChangeEvent<HTMLSelectElement>, player: string) => {
        e.preventDefault();

        // set the game info
        setGameInfo({
            ...gameInfo,
            [player]: e.target.value,
        });
    }

    // dummy data
    const players = [
        {
            name: "Magnus Carlsen",
            rating: 2867,
        },
        {
            name: "Hikaru Nakamura",
            rating: 2821,
        },
        {
            name: "Maxime Vachier-Lagrave",
            rating: 2700,
        },
    ];


    /**********
     * Render
     **********/

    // capitalize first letter
    const titleFormType = formType.charAt(0).toUpperCase() + formType.slice(1);

    // capitalize all letters
    const capFormType = formType.toUpperCase();

    // create select options
    const playerOptions = players.map((p, i) => {
        return <option key={i}>{p.name} ({p.rating.toString()})</option>
    });

    return (
        <form>
            <div className="form-group">
                <h3>{titleFormType} game.</h3>
                <div className="form-row">
                    <div className="col">
                        <label htmlFor="select-w-player">White player</label>
                        <select
                            className="form-control"
                            onChange={(e) => handelSelectChanged(e, "whitePlayer")}
                            id="select-w-player">
                            {playerOptions}
                        </select>
                    </div>
                    <div className="col">
                        <label htmlFor="select-b-player">Black player</label>
                        <select
                            className="form-control"
                            onChange={(e) => handelSelectChanged(e, "blackPlayer")}
                            id="select-b-player">
                            {playerOptions}
                        </select>
                    </div>
                </div>
            </div>
            <button className="btn btn-primary" onClick={onBtnClick}>{capFormType}</button>
        </form>

    )
}

export default GameForm;
