import { useState, useEffect } from "react";
import Board from "../Board";
import './Game.css'

const Game = () => {
    const [currPlayer, setCurrPlayer] = useState('X');
    const [boxValues, setBoxValues] = useState(Array(9).fill(undefined));
    const [winner, setWinner] = useState();
    const [highlightedBoxes, setHighlightedBoxes] = useState([]);

    const switchPlayer = () => {
        setCurrPlayer(currPlayer === 'X' ? 'O' : 'X');
    }

    const updateBoxValue = (index)=> {
        if(winner || boxValues[index]) return;

        const data = [...boxValues]
        data[index] = currPlayer;
        setBoxValues(data);

        switchPlayer();
    }

    useEffect(function isWinner() {
        const chances = [[0, 1, 2],
                        [3, 4, 5],
                        [6, 7, 8],
                        [0, 3, 6],
                        [1, 4, 7],
                        [2, 5, 8],
                        [0, 4, 8],
                        [2, 4, 6]];
        
        for(let i=0; i<chances.length; i++) {
            const [x, y, z] = chances[i];
            if(boxValues[x] && boxValues[y] && boxValues[z]) {
                if(boxValues[x] === boxValues[y] && boxValues[y] === boxValues[z]) {
                    setWinner(boxValues[x])
                    setHighlightedBoxes(chances[i])
                    setCurrPlayer('-')
                }
            }
        }
    }, [boxValues]);

    const onReset = () => {
        setBoxValues(Array(9).fill(undefined));
        setCurrPlayer('X');
        setWinner(undefined);
        setHighlightedBoxes([])
    }

    return <div className="game-container">
        <h1>Tic Tac Toe</h1>
        <h3>Winner: {winner}</h3>
        <div className="control-panel">
            <div className="player">Player<span>{currPlayer}</span></div>
            <button className="reset" onClick={onReset}>Reset</button>
        </div>
        <Board highlightedBoxes={highlightedBoxes} boxValues={boxValues} updateBoxValue={updateBoxValue}/>
    </div>
}

export default Game;