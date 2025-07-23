import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

const GameBoard = () => {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    const handleSelectSquare = (rowIdx, colIdx) => {
        setGameBoard(prevGameBoard => {
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updatedBoard[rowIdx][colIdx] = 'X';
            return updatedBoard;
        })
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIdx) => (
                <li key={rowIdx}>
                    <ol>
                        {row.map((playerSymbol, colIdx) => (
                            <li key={colIdx}>
                                <button onClick={() => handleSelectSquare(rowIdx, colIdx)}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}

export default GameBoard;