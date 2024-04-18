import {STRINGS} from '../constants'
import {changeFilter, changeSort, searchCard, setReadingMode} from '../store/actions'
import {CardType} from './cards'

export type SettingsType = {
    readingMode: boolean
    filter: FilterType
    sort: SortType
    searchQuery: string
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

export type SettingsActionsType =
    ReturnType<typeof setReadingMode>
    | ReturnType<typeof changeFilter>
    | ReturnType<typeof changeSort>
    | ReturnType<typeof searchCard>