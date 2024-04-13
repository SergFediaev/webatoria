import {SettingsType} from './settingsTypes'
import {KEYS} from '../../constants/keys'
import {STRINGS} from '../../constants/strings'

const defaultSettings: SettingsType = {
    readingMode: true,
    filter: STRINGS.ALL,
}

export const getSettings = (): SettingsType => {
    const setting = localStorage.getItem(KEYS.SETTINGS)
    return setting ? JSON.parse(setting) : defaultSettings
}

export const setSettings = (settings: SettingsType) => localStorage.setItem(KEYS.SETTINGS, JSON.stringify(settings))