import Axios from 'axios'
import { storageService } from './storage.service.js'

const RATE_KEY = 'rate'
const CONFIRMED_TRANSACTIONS_KEY = 'confirmed-transactions'
const MARKET_PRICE_KEY = 'market-price'

var axios = Axios.create({
    withCredentials: false
})

export const bitcoinService = {
    getRate,
    getMarketPrice,
    getConfirmedTransactions
}

async function getRate() {
    const rate = storageService.loadFromStorage(RATE_KEY)
    if (rate) return rate
    try {
        console.log('getting from ajax')
        const {data} = await axios.get('https://blockchain.info/ticker')
        const newRate = data.USD.last
        storageService.saveToStorage(RATE_KEY, newRate)
        console.log(newRate)
        return newRate
        // const res = await axios.get('https://blockchain.info/tobtc?currency=USD&value=1')
        // storageService.saveToStorage(RATE_KEY, res.data)
        // return res.data
    } catch (err) {
        console.log('Had issues getting rate', err)
    }
}
async function getConfirmedTransactions() {
    const rate = storageService.loadFromStorage(CONFIRMED_TRANSACTIONS_KEY)
    if (rate) return rate
    try {
        console.log('getting from ajax')
        const res = await axios.get('https://api.blockchain.info/charts/n-transactions?timespan=1months&format=json&cors=true')
        storageService.saveToStorage(CONFIRMED_TRANSACTIONS_KEY, res.data)
        return res.data
    } catch (err) {
        console.log('Had issues getting rate', err)
    }
}
async function getMarketPrice() {
    const rate = storageService.loadFromStorage(MARKET_PRICE_KEY)
    if (rate) return rate
    try {
        console.log('getting from ajax')
        const res = await axios.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
        storageService.saveToStorage(MARKET_PRICE_KEY, res.data)
        return res.data
    } catch (err) {
        console.log('Had issues getting rate', err)
    }
}

