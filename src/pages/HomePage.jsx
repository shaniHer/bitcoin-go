import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { MovesList } from '../cmps/MovesList.jsx'
import cloneDeep from 'lodash/cloneDeep'
import { getRate } from '../store/actions/bitcoinActions.js'
import { setLoggedInUser } from '../store/actions/userActions.js'
import _ from "underscore"


export const HomePage = () => {
    const { rate } = useSelector(state => state.bitcoinModule)
    const { loggedInUser } = useSelector(state => state.userModule)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getRate())
        setUser()
    }, [])

    const setUser = async () => {
        if (loggedInUser) return
        try {
            await dispatch(setLoggedInUser('David'))
        } catch (err) {
            console.log('Had issues signing-up', err)
        }
    }

    const movesToShow = () => {
        const { moves } = loggedInUser
        return cloneDeep(moves).slice(0, 3)
    }

    const formatUsd = (num) => {
        return num.toLocaleString('en-US', {
            style: 'currency', currency: 'USD'
        })
    }

    return (
        <div className="homepage">
            {loggedInUser && <div>
                <div className="greet-user">
                    Welcome back {loggedInUser.name},
                </div>
                {rate && <div className="status">
                    <div className="balance">
                        <div className="balance-title">CURRENT BALANCE</div>
                        <div>BIT: <span>{'\u20BF'} {loggedInUser.coins}</span></div>
                        <div>USD: <span>{formatUsd(loggedInUser.coins * rate)}</span> </div>
                    </div>
                    <div className="rate">
                        <div className="balance-title">CURRENT BTC USD</div>
                        <div> {formatUsd(rate)}</div>
                    </div>
                </div>}
                <MovesList title={'Last 3 moves'} moves={movesToShow()} rate={rate} />
            </div>}
        </div>

    )
}
