import {ACTION_TYPES, KEYS} from '../../constants'
import {SettingsActionsType, SettingsType} from '../../types'
import {getFromLocalStorage, setToLocalStorage} from '../../utils'
import {defaultSettings} from '../settings'

export const settingsReducer = (settings: SettingsType = getFromLocalStorage(KEYS.SETTINGS, defaultSettings), action: SettingsActionsType): SettingsType => {
    const {type, payload} = action
    switch (type) {
        case ACTION_TYPES.SET_READING_MODE: {
            const settingsCopy: SettingsType = {...settings, readingMode: payload.readingMode}
            setToLocalStorage(KEYS.SETTINGS, settingsCopy)
            return settingsCopy
        }
        case ACTION_TYPES.CHANGE_FILTER: {
            const settingsCopy: SettingsType = {...settings, filter: payload.filter}
            setToLocalStorage(KEYS.SETTINGS, settingsCopy)
            return settingsCopy
        }
        case ACTION_TYPES.CHANGE_SORT: {
            const settingsCopy: SettingsType = {...settings, sort: payload.sort}
            setToLocalStorage(KEYS.SETTINGS, settingsCopy)
            return settingsCopy
        }
        case ACTION_TYPES.SEARCH_CARD: {
            const settingsCopy: SettingsType = {...settings, searchQuery: payload.query}
            setToLocalStorage(KEYS.SETTINGS, settingsCopy)
            return settingsCopy
        }
        case ACTION_TYPES.SET_NOTIFICATION_SOUND: {
            const settingsCopy: SettingsType = {...settings, notificationSound: payload.enabled}
            setToLocalStorage(KEYS.SETTINGS, settingsCopy)
            return settingsCopy
        }
        case ACTION_TYPES.SET_LANGUAGE: {
            const settingsCopy: SettingsType = {...settings, language: payload.language}
            setToLocalStorage(KEYS.SETTINGS, settingsCopy)
            return settingsCopy
        }
        case ACTION_TYPES.SET_AUTO_UPDATE_CARDS: {
            const settingsCopy: SettingsType = {...settings, autoUpdateCards: payload.enabled}
            setToLocalStorage(KEYS.SETTINGS, settingsCopy)
            return settingsCopy
        }
        case ACTION_TYPES.SET_AUTO_UPDATE_CARDS_INTERVAL: {
            const settingsCopy: SettingsType = {...settings, autoUpdateCardsInterval: payload.interval}
            setToLocalStorage(KEYS.SETTINGS, settingsCopy)
            return settingsCopy
        }
        case ACTION_TYPES.SET_CUSTOM_CARDS_WARNING: {
            const settingsCopy: SettingsType = {...settings, customCardsWarning: payload.enabled}
            setToLocalStorage(KEYS.SETTINGS, settingsCopy)
            return settingsCopy
        }
        case ACTION_TYPES.SET_DEV_MODE: {
            const settingsCopy: SettingsType = {...settings, devMode: payload.enabled}
            setToLocalStorage(KEYS.SETTINGS, settingsCopy)
            return settingsCopy
        }
        case ACTION_TYPES.SET_LOG_RENDER: {
            const settingsCopy: SettingsType = {...settings, logRender: payload.enabled}
            setToLocalStorage(KEYS.SETTINGS, settingsCopy)
            return settingsCopy
        }
        case ACTION_TYPES.SET_MARKUP: {
            const settingsCopy: SettingsType = {...settings, showMarkup: payload.enabled}
            setToLocalStorage(KEYS.SETTINGS, settingsCopy)
            return settingsCopy
        }
        case ACTION_TYPES.RESET_SETTINGS: {
            const settingsCopy: SettingsType = {...defaultSettings}
            setToLocalStorage(KEYS.SETTINGS, settingsCopy)
            return settingsCopy
        }
        default:
            return settings
    }
}