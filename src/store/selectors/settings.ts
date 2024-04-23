import {StateType} from '../index'

export const selectSettings = (state: StateType) => state.settings

export const selectSettingsReadingMode = (state: StateType) => state.settings.readingMode

export const selectSettingsFilter = (state: StateType) => state.settings.filter

export const selectSettingsSort = (state: StateType) => state.settings.sort

export const selectSettingsSearchQuery = (state: StateType) => state.settings.searchQuery

export const selectSettingsNotificationSound = (state: StateType) => state.settings.notificationSound

export const selectSettingsAutoUpdateCards = (state: StateType) => state.settings.autoUpdateCards

export const selectSettingsAutoUpdateCardsInterval = (state: StateType) => state.settings.autoUpdateCardsInterval

export const selectSettingsLanguage = (state: StateType) => state.settings.language

export const selectSettingsMarkup = (state: StateType) => state.settings.showMarkup