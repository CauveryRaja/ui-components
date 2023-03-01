import { useState } from "react";
import Board from "../Board";
import './Game.css'

const Game = () => {
    const [currPlayer, setCurrPlayer] = useState('X');

    const switchPlayer = () => {
        setCurrPlayer(currPlayer === 'X' ? 'O' : 'X');
    }

    return <div className="game-container">
        <h1>Tic Tac Toe</h1>
        <Board currPlayer={currPlayer} onUpdate={switchPlayer}/>
    </div>
}

export default Game;