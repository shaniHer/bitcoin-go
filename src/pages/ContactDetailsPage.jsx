import { useEffect } from 'react'
import defaultContactImg from '../assets/icons/avatar.png'
import { Link } from 'react-router-dom'
import { TransferFund } from '../cmps/TransferFund.jsx'
import { MovesList } from '../cmps/MovesList.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { transferCoins } from '../store/actions/userActions.js'
import { getContactById } from '../store/actions/contactActions.js'
import { getRate } from '../store/actions/bitcoinActions.js'



export const ContactDetailsPage = ({ match, history }) => {

    useEffect(() => {
        const { id } = match.params
        dispatch(getContactById(id))
        dispatch(getRate())
    }, [match.params.id])

    const dispatch = useDispatch()
    const { currContact } = useSelector(state => state.contactModule)
    const { loggedInUser } = useSelector(state => state.userModule)
    const { rate } = useSelector(state => state.bitcoinModule)


    const movesToShow = () => {
        const { moves } = loggedInUser
        return moves.filter(move => move.toId === currContact._id)
    }
    const onTransferCoins = async (amount) => {
        dispatch(transferCoins(amount, currContact))
    }


    return (
        <div className="details-page">
            <div className="sub-nav">
                <Link to={'/contact/'}>Back</Link>
                <div>
                    {currContact && <Link to={'/contact/edit/' + currContact._id}>Edit</Link>}
                </div>
            </div>
            {currContact && <div>
                <div className="contact-details">
                    <img src={defaultContactImg} className="avatar" />
                    <p>{currContact.name}</p>
                    <p>{currContact.phone}</p>
                    <p>{currContact.email}</p>
                    <TransferFund contact={currContact} onTransferCoins={onTransferCoins} />
                </div>
                {loggedInUser && rate && <MovesList title={'Moves History'} moves={movesToShow()} rate={rate} />}
            </div>}
        </div>
    )
}