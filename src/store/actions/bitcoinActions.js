import { bitcoinService } from "../../services/bitcoinService"

export function getRate() {
  return async (dispatch) => {
    try {
      const rate = await bitcoinService.getRate()
      console.log(rate)
      dispatch({ type: 'SET_RATE', rate })

    } catch (err) {
      console.log('Had issues setting rate', err)
    }

  }
}


