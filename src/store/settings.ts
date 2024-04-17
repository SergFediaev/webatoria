import {KEYS, STRINGS} from '../constants'
import {SettingsType} from '../types'

const defaultSettings: SettingsType = {
    readingMode: true,
    filter: STRINGS.ALL,
    searchQuery: STRINGS.EMPTY,
}

export const getSettings = (): SettingsType => {
    const setting = localStorage.getItem(KEYS.SETTINGS)
    return setting ? JSON.parse(setting) : defaultSettings
}

export const setSettings = (settings: SettingsType) => localStorage.setItem(KEYS.SETTINGS, JSON.stringify(settings))