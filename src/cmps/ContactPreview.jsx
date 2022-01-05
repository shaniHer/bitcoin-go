import defaultContactImg from '../assets/icons/avatar.png'
import { Link } from "react-router-dom"

export const ContactPreview = ({ contact, deleteContact }) => {
    // const onDeleteContact = (ev) => {
    //     ev.stopPropagation()
    //     deleteContact(contact._id)
    // }

    const { name, phone } = contact
    return (
        <div >
            <Link to={'/contact/' + contact._id} className="contact-card">
                <img src={defaultContactImg} className="avatar" />
                <div className="contact-details-preview ">
                    <div>{name}</div>
                    <div>{phone}</div>
                </div>
            </Link>
            {/* <button onClick={onDeleteContact}>X</button> */}
        </div>
    )
}