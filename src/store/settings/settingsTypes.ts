import {STRINGS} from '../../constants'
import {changeFilter, setReadingMode} from './settingsActions'

export type SettingsType = {
    readingMode: boolean
    filter: FilterType
}

export type FilterType = typeof STRINGS.ALL
    | typeof STRINGS.UNCATEGORIZED
    | typeof STRINGS.REACT
    | typeof STRINGS.JAVASCRIPT
    | typeof STRINGS.HTML
    | typeof STRINGS.CSS

export type SettingsActionsType = ReturnType<typeof setReadingMode> | ReturnType<typeof changeFilter>