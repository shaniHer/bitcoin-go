import { useEffect } from 'react'

export const MovesList = ({ title, moves, rate }) => {
    useEffect(() => {
        console.log('movesList', moves)
    })

    const formatUsd = (num) => {
        return num.toLocaleString('en-US', {
            style: 'currency', currency: 'USD'
        })
    }

    return (
        <div className="moves-list">
            <div className="title">{title}</div>
            <ul>
                {moves.map(move => (
                    <li className="move-details" key={move.at}>
                        <div>{move.to}</div>
                        <div className="move-amount" >
                            <span className="amount-btc">{'\u20BF'} {move.amount} </span>
                            |<span className="amount-usd"> {formatUsd(rate * move.amount)}</span>
                        </div>
                        <div className="move-status">Status: approved</div>
                        <div className="move-time">{move.at}</div>
                    </li>

                ))}
            </ul>
        </div>
    )
}
