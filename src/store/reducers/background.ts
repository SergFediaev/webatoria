import {BackgroundActionsType, BackgroundType} from '../../types'
import {ACTION_TYPES, KEYS} from '../../constants'
import {defaultBackground} from '../background'
import {getFromLocalStorage, setToLocalStorage} from '../../utils'

export const backgroundReducer = (background: BackgroundType = getFromLocalStorage(KEYS.BACKGROUND, defaultBackground), action: BackgroundActionsType): BackgroundType => {
    const {type, payload} = action
    switch (type) {
        case ACTION_TYPES.SET_BACKGROUND_VARIANT: {
            const backgroundCopy: BackgroundType = {...background, variant: payload.variant}
            setToLocalStorage(KEYS.BACKGROUND, backgroundCopy)
            return backgroundCopy
        }
        case ACTION_TYPES.SET_BACKGROUND_COLOR: {
            const backgroundCopy: BackgroundType = {...background, color: payload.color}
            setToLocalStorage(KEYS.BACKGROUND, backgroundCopy)
            return backgroundCopy
        }
        case ACTION_TYPES.SET_BACKGROUND_WALLPAPER: {
            const backgroundCopy: BackgroundType = {...background, wallpaper: payload.wallpaper}
            setToLocalStorage(KEYS.BACKGROUND, backgroundCopy)
            return backgroundCopy
        }
        case ACTION_TYPES.SET_BACKGROUND_VIDEO: {
            const backgroundCopy: BackgroundType = {...background, video: payload.video}
            setToLocalStorage(KEYS.BACKGROUND, backgroundCopy)
            return backgroundCopy
        }
        case ACTION_TYPES.SET_BACKGROUND_OVERLAY: {
            const backgroundCopy: BackgroundType = {...background, overlay: payload.enabled}
            setToLocalStorage(KEYS.BACKGROUND, backgroundCopy)
            return backgroundCopy
        }
        case ACTION_TYPES.SET_BACKGROUND_SOUND: {
            const backgroundCopy: BackgroundType = {...background, sound: payload.enabled}
            setToLocalStorage(KEYS.BACKGROUND, backgroundCopy)
            return backgroundCopy
        }
        case ACTION_TYPES.RESET_BACKGROUND: {
            const backgroundCopy: BackgroundType = {...defaultBackground}
            setToLocalStorage(KEYS.BACKGROUND, backgroundCopy)
            return backgroundCopy
        }
        default:
            return background
    }
}