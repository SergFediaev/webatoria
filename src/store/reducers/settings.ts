import {ACTION_TYPES} from '../../constants'
import {SettingsActionsType, SettingsType} from '../../types'
import {getSettings, setSettings} from '../settings'

export const settingsReducer = (settings: SettingsType = getSettings(), action: SettingsActionsType): SettingsType => {
    const {type, payload} = action
    switch (type) {
        case ACTION_TYPES.SET_READING_MODE: {
            const settingsCopy: SettingsType = {...settings, readingMode: payload.readingMode}
            setSettings(settingsCopy)
            return settingsCopy
        }
        case ACTION_TYPES.CHANGE_FILTER: {
            const settingsCopy: SettingsType = {...settings, filter: payload.filter}
            setSettings(settingsCopy)
            return settingsCopy
        }
        case ACTION_TYPES.SEARCH_CARD:
            return {...settings, searchQuery: payload.query}
        default:
            return settings
    }
}