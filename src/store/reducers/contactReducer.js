//implementing state management: 1. writing the reducer function 2. creating a store object (store/index.js)
//3. introducing the store to the app via provider in the src/index.js
//4. write a connect func in eac cmp that uses the store
//5. write mapStateToProps func to declare which state part to use in the cmp
//6. create actions dispatcher layer, create dispatch functions
//7. create mapDispatchToProps obj in each cmp and use the dispatch action
//8. join reducers into combined in index.js

const INITIAL_STATE = {
  contacts: null,
  currContact: null,
  filterBy: null
}
export function contactReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_CONTACTS':
      return {
        ...state,
        contacts: action.contacts
      }
    case 'SET_CONTACT':
      return {
        ...state,
        currContact: action.contact
      }
    case 'SET_FILTER_BY':
      return {
        ...state,
        filterBy: action.filterBy
      }
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [...state.contacts, action.contact]
      }
    case 'REMOVE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact._id !== action.contactId)
      }
    case 'UPDATE_CONTACT':
      const currContact = state.currContact._id === action.contact._id ? action.contact : state.currContact
      return {
        ...state,
        contacts: state.contacts && 
        
        state.contacts.map(contact => contact._id === action.contact._id ? action.contact : contact),
        currContact
      }
    default:
      return state
  }
}