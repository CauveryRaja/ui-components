import { useState } from "react";
import Box from "../Box";
import './Board.css'

const Board = ({ boxValues, updateBoxValue }) => {
    return <div className="board">
        {boxValues.map((value, index) => <Box value={value} clickListener={() => updateBoxValue(index)}/>)}
    </div>
}

export default Board;