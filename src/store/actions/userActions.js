import { userService } from "../../services/userService"

export function transferCoins(amount, contact) {
  return async (dispatch) => {
    try {
      const user = await userService.addMove(amount, contact)
      console.log('user:', user, 'amount:', amount)
      dispatch({ type: 'TRANSFER_COINS', user })

    } catch (err) {
      console.log('Had issues', err)
    }
  }
}

export function setLoggedInUser(name) {
  return async (dispatch) => {
    try {
      const loggedInUser = await userService.signUp(name)
      console.log('user actions',loggedInUser)
      dispatch({ type: 'SET_LOGGEDIN_USER', loggedInUser })

    } catch (err) {
      console.log('Had issues signing up', err)
    }

  }
}


