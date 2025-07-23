import { useState } from "react";

const Player = ({ initialName, symbol }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    const handleEditClick = () => {
        setIsEditing(prevIsEditing => !prevIsEditing);
    }

    const handleTextChange = (event) => {
        setPlayerName(event.target.value);
    }

    return (
        <li>
            <span className="player">
                {isEditing ? 
                    <input type="text" required value={playerName} onChange={handleTextChange} /> : 
                    <span className="player-name">{playerName}</span>
                }
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}

export default Player;