import { useState } from "react";
import Box from "../Box";
import './Board.css'

const Board = ({ currPlayer, onUpdate }) => {
    const [boxValues, setBoxValues] = useState(Array(9).fill(undefined));

    const updateBoxValue = (index)=> {
        if(boxValues[index]) return;

        onUpdate();

        const data = [...boxValues]
        data[index] = currPlayer;
        setBoxValues(data)
    }

    const checkForWinner = () => {
        
    }

    return <div className="board">
        {boxValues.map((value, index) => <Box value={value} clickListener={() => updateBoxValue(index)}/>)}
    </div>
}

export default Board;