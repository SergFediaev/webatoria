import {ACTION_TYPES} from '../../constants'
import {AutoUpdateCardsIntervalType, FilterType, LanguageType, SortType} from '../../types'

export const setReadingMode = (readingMode: boolean) => ({
    type: ACTION_TYPES.SET_READING_MODE,
    payload: {readingMode},
} as const)

export const changeFilter = (filter: FilterType) => ({
    type: ACTION_TYPES.CHANGE_FILTER,
    payload: {filter},
} as const)

export const changeSort = (sort: SortType) => ({
    type: ACTION_TYPES.CHANGE_SORT,
    payload: {sort},
} as const)

export const searchCard = (query: string) => ({
    type: ACTION_TYPES.SEARCH_CARD,
    payload: {query},
} as const)

export const setNotificationSound = (enabled: boolean) => ({
    type: ACTION_TYPES.SET_NOTIFICATION_SOUND,
    payload: {enabled},
} as const)

export const setLanguage = (language: LanguageType) => ({
    type: ACTION_TYPES.SET_LANGUAGE,
    payload: {language},
} as const)

export const setAutoUpdateCards = (enabled: boolean) => ({
    type: ACTION_TYPES.SET_AUTO_UPDATE_CARDS,
    payload: {enabled},
} as const)

export const setAutoUpdateCardsInterval = (interval: AutoUpdateCardsIntervalType) => ({
    type: ACTION_TYPES.SET_AUTO_UPDATE_CARDS_INTERVAL,
    payload: {interval},
} as const)

export const setCustomCardsWarning = (enabled: boolean) => ({
    type: ACTION_TYPES.SET_CUSTOM_CARDS_WARNING,
    payload: {enabled},
} as const)

export const setDevMode = (enabled: boolean) => ({
    type: ACTION_TYPES.SET_DEV_MODE,
    payload: {enabled},
} as const)

export const setLogRender = (enabled: boolean) => ({
    type: ACTION_TYPES.SET_LOG_RENDER,
    payload: {enabled},
} as const)

export const setMarkup = (enabled: boolean) => ({
    type: ACTION_TYPES.SET_MARKUP,
    payload: {enabled},
} as const)

export const resetSettings = () => ({
    type: ACTION_TYPES.RESET_SETTINGS,
    payload: {},
} as const)