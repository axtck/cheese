export type PlayerInfo = {
    id: number;
    name: string;
    rating: number;
}

export type GamePlayersInfo = {
    whitePlayerId: string;
    blackPlayerId: string;
}

export type GameConfig = {
    players: GamePlayersInfo;
    moves: string;
}

export type GameType = {
    gameId?: string;
    name: string;
    time?: Date;
    pgn: string;
}
