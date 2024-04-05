import {combineReducers, legacy_createStore} from 'redux'
import {cardsReducer} from './cards/cardsReducer'

const rootReducer = combineReducers({
    cards: cardsReducer,
})

export const store = legacy_createStore(rootReducer)

export type StoreType = ReturnType<typeof rootReducer>