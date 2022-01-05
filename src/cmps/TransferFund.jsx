import { useEffect, useState } from 'react'

export const TransferFund = ({ onTransferCoins, contact }) => {

    const [amount, setAmount] = useState('')

    const onTransfer = async (ev) => {
        ev.preventDefault()
        onTransferCoins(amount)
        setAmount('')
    }

    return (
        <div className="transfer-fund">
            <form onSubmit={onTransfer}>
                <label htmlFor="amount">
                    <input type="text" onChange={(e) => setAmount(+e.target.value)} value={amount} />
                </label>
                <button>Transfer</button>
            </form>
        </div>

    )


}
