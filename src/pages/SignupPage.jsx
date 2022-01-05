import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLoggedInUser } from '../store/actions/userActions.js'


export const SignupPage = ({ history }) => {

    const [username, setUsername] = useState(null)
    const dispatch = useDispatch()

    const onSignUp = async (ev) => {
        ev.preventDefault()
        try {
            await dispatch(setLoggedInUser(username))
            history.push('/')
        } catch (err) {
            console.log('Had issues signing-up', err)
        }
    }

    return (
        <div className="signup">
            {/* <img src={bitcoinIcon} /> */}
            <div>Sign-up</div>
            <div>Enter username</div>
            <form onSubmit={onSignUp}>
                <label htmlFor="username">
                    <input type="text" id="username" onChange={(ev) => setUsername(ev.target.value)} />
                    <button>Sign-Up</button>
                </label>
            </form>
        </div>
    )
}

