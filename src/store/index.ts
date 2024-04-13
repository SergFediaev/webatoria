import {combineReducers, legacy_createStore} from 'redux'
import {cardsReducer, settingsReducer} from './reducers'

const rootReducer = combineReducers({
    cards: cardsReducer,
    settings: settingsReducer,
})

export const store = legacy_createStore(rootReducer)

export type StateType = ReturnType<typeof rootReducer>