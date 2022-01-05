import { useEffect } from "react";
import { ContactList } from "../cmps/ContactList.jsx";
import { ContactFilter } from "../cmps/ContactFilter.jsx";
import { useDispatch, useSelector } from 'react-redux'
import { loadContacts, deleteContact, setFilterBy } from '../store/actions/contactActions'


export const ContactPage = ({ history }) => {
    const dispatch = useDispatch()
    const { contacts } = useSelector(state => state.contactModule)

    useEffect(() => {
        dispatch(loadContacts())
    }, [])

    const onDeleteContact = async (contactId) => {
        dispatch(deleteContact(contactId))
    }

    const onFilter = (filterBy) => {
        dispatch(setFilterBy(filterBy))
        dispatch(loadContacts())
    }

    const goToAddContact = () => {
        history.push('/contact/edit')
    }

    return (
        <div className="contact-page">
            <button onClick={goToAddContact} className="add-contact-btn">+</button>
            <ContactFilter onFilter={onFilter} />
            {contacts && <ContactList contacts={contacts} deleteContact={onDeleteContact} />}
        </div>
    )

}

