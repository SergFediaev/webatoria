import {combineReducers, legacy_createStore} from 'redux'
import {cardsReducer} from './cards/cardsReducer'
import {settingsReducer} from './settings/settingsReducer'

const rootReducer = combineReducers({
    cards: cardsReducer,
    settings: settingsReducer,
})

export const store = legacy_createStore(rootReducer)

export type StoreType = ReturnType<typeof rootReducer>