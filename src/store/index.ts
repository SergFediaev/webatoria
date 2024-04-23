import {combineReducers, compose, legacy_createStore, Store} from 'redux'
import {backgroundReducer, cardsReducer, notificationsReducer, settingsReducer, soundReducer} from './reducers'

const rootReducer = combineReducers({
    cards: cardsReducer,
    settings: settingsReducer,
    notifications: notificationsReducer,
    sound: soundReducer,
    background: backgroundReducer,
})

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store: Store<StateType> = legacy_createStore(rootReducer, composeEnhancers())

export type StateType = ReturnType<typeof rootReducer>