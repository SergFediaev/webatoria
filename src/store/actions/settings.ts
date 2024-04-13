import {ACTION_TYPES} from '../../constants'
import {FilterType} from '../../types'

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