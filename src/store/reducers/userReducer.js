const INITIAL_STATE = {
  loggedInUser: null
}
export function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'TRANSFER_COINS':
      return {
        ...state,
        loggedInUser: {
          ...state.loggedInUser,
          coins: action.user.coins,
          moves: [...action.user.moves]
        }
      }

      case 'SET_LOGGEDIN_USER':
      return {
        ...state,
        loggedInUser: action.loggedInUser
      }

    default:
      return state
  }
}