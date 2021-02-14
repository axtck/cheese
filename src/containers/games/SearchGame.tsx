import React, { FunctionComponent, useState, useEffect, MouseEvent, ChangeEvent } from 'react';
import { GamePlayersInfo, PlayerInfo } from '../../types';

interface SearchGameProps { };


const SearchGame: FunctionComponent<SearchGameProps> = () => {

    // inputs state
    const [gamePlayers, setGamePlayers] = useState<GamePlayersInfo>({ whitePlayerId: "", blackPlayerId: "" });

    // validation state
    const [valid, setValid] = useState<Boolean>(false);
    const [validClass, setValidClass] = useState<string>("");


    useEffect(() => {
        if (gamePlayers.whitePlayerId && gamePlayers.blackPlayerId) {
            setValid(true);
        } else {
            setValid(false);
        }
    }, [gamePlayers]);

    // setting class based on validation
    useEffect(() => {
        valid ? setValidClass("btn btn-success") : setValidClass("btn btn-danger");
    }, [valid]);

    const handleSelectChanged = (e: ChangeEvent<HTMLSelectElement>): void => {
        e.preventDefault();

        // set the game info
        setGamePlayers({
            ...gamePlayers,
            [e.target.name]: e.target.value,
        });
    }

    const handleBtnClicked = (e: MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();

        if (valid) {
            console.log('searching for games...');
        }
    }

    // dummy data
    const players: Array<PlayerInfo> = [
        {
            id: 1,
            name: "Magnus Carlsen",
            rating: 2867,
        },
        {
            id: 2,
            name: "Hikaru Nakamura",
            rating: 2821,
        },
        {
            id: 3,
            name: "Maxime Vachier-Lagrave",
            rating: 2700,
        },
    ];


    /**********
     * Render
     **********/

    // create select options
    const playerOptions = players.map((p, i) => {
        return <option value={p.id} key={i}>{p.name} ({p.rating.toString()})</option>
    });


    return (
        <form>
            <div className="form-group">
                <h3>Search game.</h3>
                <div className="form-row">
                    <div className="col">
                        <label htmlFor="select-w-player">White player</label>
                        <select
                            name="whitePlayerId"
                            id="select-w-player"
                            className="form-control"
                            onChange={handleSelectChanged}
                            value={gamePlayers.whitePlayerId}
                        >
                            <option disabled></option>
                            {playerOptions}
                        </select>
                    </div>
                    <div className="col">
                        <label htmlFor="select-b-player">Black player</label>
                        <select
                            name="blackPlayerId"
                            id="select-b-player"
                            className="form-control"
                            onChange={handleSelectChanged}
                            value={gamePlayers.blackPlayerId}
                        >
                            <option disabled></option>
                            {playerOptions}
                        </select>
                    </div>
                </div>
            </div>
            <button className={validClass} onClick={handleBtnClicked}>SEARCH</button>
        </form>
    )
}

export default SearchGame;
