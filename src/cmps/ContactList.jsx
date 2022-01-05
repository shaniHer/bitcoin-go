import { ContactPreview } from "./ContactPreview.jsx"

export const ContactList = ({ contacts, deleteContact }) => {
    return (
        <div>
            {contacts.map(contact => (
                <ContactPreview contact={contact} key={contact._id} deleteContact={deleteContact} />
            ))}
        </div>
    )

}