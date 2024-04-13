import {SettingsActionsType, SettingsType} from './settingsTypes'
import {getSettings, setSettings} from './settings'
import {ACTION_TYPES} from '../../constants/actionTypes'

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
        default:
            return settings
    }
}