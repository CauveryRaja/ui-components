import { useState } from "react";
import Box from "../Box";
import './Board.css'

const Board = ({ boxValues, updateBoxValue, highlightedBoxes }) => {
    return <div className="board">
        {boxValues.map((value, index) => (
                <Box value={value} 
                    highlight={highlightedBoxes.includes(index)} 
                    clickListener={() => updateBoxValue(index)}/>
            )
        )}
    </div>
}

export default Board;