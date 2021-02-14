import React, { FunctionComponent } from 'react';
import GameForm from '../../components/game/GameForm';
import api from '../../api/api';
import { GameType } from '../../types';

interface CreateGameProps { };

const CreateGame: FunctionComponent<CreateGameProps> = () => {

    const handleBtnClicked = (game: GameType): void => {
        api.post('/games',
            game // pass game to post
        ).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        }).finally(() => {
            console.log('finally');
        });
    }

    return (
        <div>
            <GameForm formType="create" onBtnClick={handleBtnClicked} />
            <h4 className="mt-5">Example complete PGN</h4>
            <p>
                [Event "Tata Steel"]
                [Site "Wijk aan Zee NED"]
                [Date "2021.01.19"]
                [EventDate "2021.01.16"]
                [Round "4.1"]
                [Result "1/2-1/2"]
                [White "Jorden van Foreest"]
                [Black "Magnus Carlsen"]
                [ECO "C78"]
                [WhiteElo "2671"]
                [BlackElo "2862"]
                [PlyCount "116"]

                1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O b5 6. Bb3 Bb7
                7. d3 Be7 8. Nc3 O-O 9. a3 Nd4 10. Nxd4 exd4 11. Ne2 c5
                12. Bg5 d5 13. Bxf6 Bxf6 14. Bxd5 Bxd5 15. exd5 Qxd5 16. Ng3
                c4 17. Re1 Rae8 18. a4 Rxe1+ 19. Qxe1 cxd3 20. cxd3 bxa4
                21. Qd1 Qb5 22. Ne4 Be7 23. Qc2 Rb8 24. Rxa4 Qxb2 25. Qxb2
                Rxb2 26. g4 Rb6 27. Rxd4 Kf8 28. Rd7 Rg6 29. Kf1 Rxg4 30. Ra7
                f5 31. Ng3 g6 32. Rxa6 Rh4 33. Kg2 Rd4 34. Ne2 Rxd3 35. Ng1
                Rd7 36. Nf3 Kg7 37. h3 Bf6 38. Kg3 Rb7 39. Kg2 Re7 40. Ra5 Rc7
                41. Rd5 Ra7 42. Rb5 Be7 43. Nd4 Rd7 44. Nf3 Rd6 45. Rb7 Kf6
                46. Ra7 h6 47. Nh4 Bd8 48. Rh7 Rd2 49. Rxh6 Kg7 50. Rxg6+ Kh7
                51. Nf3 Rxf2+ 52. Kxf2 Kxg6 53. Kg2 Kh5 54. Nd4 f4 55. Ne6 Bg5
                56. Nxg5 Kxg5 57. Kf3 Kh4 58. Kxf4 Kxh3 1/2-1/2
            </p>

            <h4>Example incomplete PGN</h4>
            <p>
                [Event "Champigny sur Marne op"]
                [Site "Champigny sur Marne"]
                [Date "1984.??.??"]
                [EventDate "?"]
                [Round "?"]
                [Result "1-0"]
                [White "Viswanathan Anand"]
                [Black "Manuel Apicella"]
                [ECO "B76"]
                [WhiteElo "2285"]
                [BlackElo "?"]
                [PlyCount "49"]

                1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be3 Bg7
                7. f3 O-O 8. Qd2 Nc6 9. O-O-O Bd7 10. h4 Qa5 11. g4 Rfc8
                12. Nb3 Qe5 13. g5 Nb4 14. Bd4 Qe6 15. gxf6 exf6 16. Kb1 a5
                17. Bh3 Qe8 18. Bxd7 Qxd7 19. a3 Nc6 20. Nd5 Nxd4 21. Nxd4 Qd8
                22. h5 b5 23. hxg6 hxg6 24. Nf5 gxf5 25. Rdg1 1-0
            </p>
        </div>
    )
}

export default CreateGame;
