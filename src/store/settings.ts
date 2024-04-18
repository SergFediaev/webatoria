import {KEYS, STRINGS} from '../constants'
import {SettingsType, SortParamsType} from '../types'
import {OptionType} from '../components/select/Select'

const defaultSettings: SettingsType = {
    readingMode: true,
    filter: STRINGS.ALL,
    sort: STRINGS.ALPHABET_ASCENDING,
    searchQuery: STRINGS.EMPTY,
}

export const getSettings = (): SettingsType => {
    const setting = localStorage.getItem(KEYS.SETTINGS)
    return setting ? JSON.parse(setting) : defaultSettings
}

export const setSettings = (settings: SettingsType) => localStorage.setItem(KEYS.SETTINGS, JSON.stringify(settings))

export const filterOptions: OptionType[] = [
    {name: STRINGS.ALL},
    {name: STRINGS.UNCATEGORIZED},
    {name: STRINGS.REACT},
    {name: STRINGS.JAVASCRIPT},
    {name: STRINGS.HTML},
    {name: STRINGS.CSS},
]

export const sortOptions: OptionType[] = [
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