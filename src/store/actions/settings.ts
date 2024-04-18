import {ACTION_TYPES} from '../../constants'
import {FilterType, SortType} from '../../types'

export const setReadingMode = (readingMode: boolean) => ({
    type: ACTION_TYPES.SET_READING_MODE,
    payload: {
        readingMode,
    },
} as const)

export const changeFilter = (filter: FilterType) => ({
    type: ACTION_TYPES.CHANGE_FILTER,
    payload: {
        filter,
    },
} as const)

export const changeSort = (sort: SortType) => ({
    type: ACTION_TYPES.CHANGE_SORT,
    payload: {
        sort,
    },
} as const)

export const searchCard = (query: string) => ({
    type: ACTION_TYPES.SEARCH_CARD,
    payload: {
        query,
    },
} as const)