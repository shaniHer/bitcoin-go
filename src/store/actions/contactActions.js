import { contactService } from "../../services/contactService"

export function loadContacts() {
    return async (dispatch, getState) => {
        const { filterBy } = getState().contactModule
        try {
            const contacts = await contactService.getContacts(filterBy)
            dispatch({ type: 'SET_CONTACTS', contacts })
        } catch (err) {
            console.log('Had issues loading contacts', err)
        }
    }
}

export function deleteContact(contactId) {
    return async dispatch => {
        try {
            await contactService.deleteContact(contactId)
            dispatch({ type: 'REMOVE_CONTACT', contactId })
        } catch (err) {
            console.log('Had issues deleting contact', err)
        }
    }
}

export function setFilterBy(filterBy) {
    return dispatch => {
        dispatch({ type: 'SET_FILTER_BY', filterBy })
    }
}

export function getContactById(contactId) {
    return async (dispatch) => {
        try {
            const contact = await contactService.getContactById(contactId)
            dispatch({ type: 'SET_CONTACT', contact })
        } catch (err) {
            console.log('Had issues loading contact', err)
        }
    }
}
