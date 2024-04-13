import {StateType} from '../index'

export const selectSettings = (state: StateType) => state.settings

export const selectSettingsReadingMode = (state: StateType) => state.settings.readingMode

export const selectSettingsFilter = (state: StateType) => state.settings.filter