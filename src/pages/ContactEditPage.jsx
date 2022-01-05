import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { contactService } from '../services/contactService'
import defaultContactImg from '../assets/icons/avatar.png'
import { useForm } from '../hooks/useForm.js'
import { Link } from 'react-router-dom'


export const ContactEditPage = ({ match, history }) => {
    const [contact, handleChange, setContact] = useForm(null)

    useEffect(() => {
        const loadContact = async () => {
            try {
                const { id } = match.params
                const contact = id ? await contactService.getContactById(id) : contactService.getEmptyContact()
                setContact(contact)
            } catch (err) {
                console.log('Had issues loading contact', err)
            }
        }
        loadContact()
    }, [])

    const onSaveContact = async (ev) => {
        ev.preventDefault()
        await contactService.saveContact(contact)
        history.push('/contact')
    }
    if (!contact) return <div>{'Loading...'}</div>
    const { name, phone, email } = contact

    return (
        <div>

            <div className="sub-nav">
                <Link to={'/contact/'}>Back</Link>
            </div>
            <div className="contact-edit">
                <img src={defaultContactImg} className="avatar" />
                <form>
                    <label htmlFor="name">
                        <input type="text" name="name" value={name} onChange={handleChange} placeholder="Name" />
                    </label>
                    <label htmlFor="phone">
                        <input type="text" name="phone" value={phone} onChange={handleChange} placeholder="Phone" />
                    </label>
                    <label htmlFor="email">
                        <input type="email" name="email" value={email} onChange={handleChange} placeholder="Email" />
                    </label>

                    <button onClick={onSaveContact}>Save</button>
                </form>
            </div>
        </div>
    )
}
