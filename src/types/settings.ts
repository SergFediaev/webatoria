import {STRINGS} from '../constants'
import {
    changeFilter,
    changeSort,
    resetSettings,
    searchCard,
    setAutoUpdateCards,
    setAutoUpdateCardsInterval,
    setCustomCardsWarning,
    setDevMode,
    setLanguage,
    setLogRender,
    setNotificationSound,
    setReadingMode,
    setMarkup,
} from '../store/actions'
import {CardType} from './cards'

export type SettingsType = {
    readingMode: boolean
    filter: FilterType
    sort: SortType
    searchQuery: string
    notificationSound: boolean
    language: LanguageType
    autoUpdateCards: boolean
    autoUpdateCardsInterval: AutoUpdateCardsIntervalType
    customCardsWarning: boolean
    devMode: boolean
    logRender: boolean
    showMarkup: boolean
}

export type FilterType = typeof STRINGS.ALL
    | typeof STRINGS.UNCATEGORIZED
    | typeof STRINGS.REACT
    | typeof STRINGS.JAVASCRIPT
    | typeof STRINGS.HTML
    | typeof STRINGS.CSS

export type SortType = typeof STRINGS.ALPHABET_ASCENDING
    | typeof STRINGS.ALPHABET_DESCENDING
    | typeof STRINGS.LIKES_ASCENDING
    | typeof STRINGS.LIKES_DESCENDING
    | typeof STRINGS.DISLIKES_ASCENDING
    | typeof STRINGS.DISLIKES_DESCENDING
    | typeof STRINGS.COMMENTS_ASCENDING
    | typeof STRINGS.COMMENTS_DESCENDING

export type SortParamsType = {
    [sortParamKey: string]: SortParamType
}

type SortParamType = {
    label: SortType // TODO: Unused label?
    key: keyof CardType
    ascending: boolean
}

export type LanguageType = typeof STRINGS.ENGLISH | typeof STRINGS.RUSSIAN

export type AutoUpdateCardsIntervalType =
    typeof STRINGS.HALF_MINUTE
    | typeof STRINGS.MINUTE
    | typeof STRINGS.TEN_MINUTES

export type SettingsActionsType =
    ReturnType<typeof setReadingMode>
    | ReturnType<typeof changeFilter>
    | ReturnType<typeof changeSort>
    | ReturnType<typeof searchCard>
    | ReturnType<typeof setNotificationSound>
    | ReturnType<typeof setLanguage>
    | ReturnType<typeof setAutoUpdateCards>
    | ReturnType<typeof setAutoUpdateCardsInterval>
    | ReturnType<typeof setCustomCardsWarning>
    | ReturnType<typeof setDevMode>
    | ReturnType<typeof setLogRender>
    | ReturnType<typeof setMarkup>
    | ReturnType<typeof resetSettings>

export type IntervalsType = {
    [interval: string]: { name: string, time: number }
}