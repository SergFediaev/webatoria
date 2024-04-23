import {KEYS, STRINGS, TIME} from '../constants'
import {IntervalsType, SettingsType, SortParamsType} from '../types'
import {OptionType} from '../components/select/Select'

export const defaultSettings: SettingsType = {
    readingMode: true,
    filter: STRINGS.ALL,
    sort: STRINGS.ALPHABET_ASCENDING,
    searchQuery: STRINGS.EMPTY,
    notificationSound: false,
    language: STRINGS.ENGLISH,
    autoUpdateCards: true,
    autoUpdateCardsInterval: STRINGS.HALF_MINUTE,
    customCardsWarning: true,
    devMode: false,
    logRender: false,
    showMarkup: false,
}

export const filters: OptionType[] = [
    {name: STRINGS.ALL},
    {name: STRINGS.UNCATEGORIZED},
    {name: STRINGS.REACT},
    {name: STRINGS.JAVASCRIPT},
    {name: STRINGS.HTML},
    {name: STRINGS.CSS},
]

export const sorts: OptionType[] = [
    {name: STRINGS.ALPHABET_ASCENDING},
    {name: STRINGS.ALPHABET_DESCENDING},
    {name: STRINGS.LIKES_ASCENDING},
    {name: STRINGS.LIKES_DESCENDING},
    {name: STRINGS.DISLIKES_ASCENDING},
    {name: STRINGS.DISLIKES_DESCENDING},
    {name: STRINGS.COMMENTS_ASCENDING},
    {name: STRINGS.COMMENTS_DESCENDING},
]

export const sortParams: SortParamsType = {
    [STRINGS.ALPHABET_ASCENDING]: {label: STRINGS.ALPHABET_ASCENDING, key: KEYS.TITLE, ascending: true},
    [STRINGS.ALPHABET_DESCENDING]: {label: STRINGS.ALPHABET_DESCENDING, key: KEYS.TITLE, ascending: false},
    [STRINGS.LIKES_ASCENDING]: {label: STRINGS.LIKES_ASCENDING, key: KEYS.LIKES, ascending: true},
    [STRINGS.LIKES_DESCENDING]: {label: STRINGS.LIKES_DESCENDING, key: KEYS.LIKES, ascending: false},
    [STRINGS.DISLIKES_ASCENDING]: {label: STRINGS.DISLIKES_ASCENDING, key: KEYS.DISLIKES, ascending: true},
    [STRINGS.DISLIKES_DESCENDING]: {label: STRINGS.DISLIKES_DESCENDING, key: KEYS.DISLIKES, ascending: false},
    [STRINGS.COMMENTS_ASCENDING]: {label: STRINGS.COMMENTS_ASCENDING, key: KEYS.COMMENTS, ascending: true},
    [STRINGS.COMMENTS_DESCENDING]: {label: STRINGS.COMMENTS_DESCENDING, key: KEYS.COMMENTS, ascending: false},
}

export const languages: OptionType[] = [
    {name: STRINGS.ENGLISH},
    {name: STRINGS.RUSSIAN},
]

export const intervals: IntervalsType = {
    [STRINGS.HALF_MINUTE]: {name: STRINGS.HALF_MINUTE, time: TIME.HALF_MINUTE},
    [STRINGS.MINUTE]: {name: STRINGS.MINUTE, time: TIME.MINUTE},
    [STRINGS.TEN_MINUTES]: {name: STRINGS.TEN_MINUTES, time: TIME.TEN_MINUTES},
}