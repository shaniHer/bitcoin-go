import { storageService } from "./storage.service"

const USER_KEY = 'user'

export const userService = {
    getUser,
    addMove,
    signUp
}

function getUser() {
    return {
        name: "Ochoa Hyde",
        coins: 100,
        moves: []
    }
}

function signUp(name) {
    const user = {
        name,
        coins: 100,
        moves: [
            {
                "toId": "5a56640298500fead8cb1ee5",
                "to": "Grace James",
                "at": "03/10/2021, 11:23:23",
                "amount": "2"
            },
            {
                "toId": "5a56640298500fead8cb1ee5",
                "to": "Grace James",
                "at": "03/10/2021, 11:23:22",
                "amount": 2
            },
            {
                "toId": "5a566402abce24c6bfe4699d",
                "to": "Dominique Soto",
                "at": "03/10/2021, 11:23:10",
                "amount": 1
            },
            {
                "toId": "5a56640243427b8f8445231e",
                "to": "Tanner Gates",
                "at": "03/10/2021, 11:22:59",
                "amount": 5
            },
            {
                "toId": "5a566402a6499c1d4da9220a",
                "to": "Shana Pope",
                "at": "03/10/2021, 11:22:50",
                "amount": 1
            },
            {
                "toId": "5a56640269f443a5d64b32ca",
                "to": "Ochoa Hyde",
                "at": "03/10/2021, 11:22:42",
                "amount": 2
            },
            {
                "toId": "5a566402f90ae30e97f990db",
                "to": "Faulkner Flores",
                "at": "03/10/2021, 11:22:34",
                "amount": 1
            }
        ]
    }
    storageService.saveToStorage(USER_KEY, user)
    return user
}

async function addMove(amount, contact) {
    const { _id, name } = contact
    const move = {
        toId: _id,
        to: name,
        at: new Date().toLocaleString('en-GB', { timeZone: 'UTC' }),
        amount
    }
    try {
        const { name, coins, moves } = await storageService.loadFromStorage(USER_KEY)
        const newUser = {
            name,
            coins: coins - amount,
            // moves: [...moves, move]
            moves: [move,...moves]
        }
        storageService.saveToStorage(USER_KEY, newUser)
        return newUser
    } catch (err) {
        console.log('had problems loading loggedInUser', err)
    }
}