const Log = ({ turns }) => {
    return (
        <ol id="log">
            {turns.map((turn) => (
                <li key={`${turn.square.row}_${turn.square.col}`}>
                    Player {turn.player} selected -- Row : {turn.square.row} & Col : {turn.square.col}
                </li>
            ))}
        </ol>
    )
}

export default Log;