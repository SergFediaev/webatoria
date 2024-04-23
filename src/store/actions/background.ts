import {BackgroundVariantType} from '../../types'
import {ACTION_TYPES} from '../../constants'

export const setBackgroundVariant = (variant: BackgroundVariantType) => ({
    type: ACTION_TYPES.SET_BACKGROUND_VARIANT,
    payload: {variant},
} as const)

export const setBackgroundColor = (color: string) => ({
    type: ACTION_TYPES.SET_BACKGROUND_COLOR,
    payload: {color},
} as const)

export const setBackgroundWallpaper = (wallpaper: string) => ({
    type: ACTION_TYPES.SET_BACKGROUND_WALLPAPER,
    payload: {wallpaper},
} as const)

export const setBackgroundVideo = (video: string) => ({
    type: ACTION_TYPES.SET_BACKGROUND_VIDEO,
    payload: {video},
} as const)

export const setBackgroundOverlay = (enabled: boolean) => ({
    type: ACTION_TYPES.SET_BACKGROUND_OVERLAY,
    payload: {enabled},
} as const)

export const setBackgroundSound = (enabled: boolean) => ({
    type: ACTION_TYPES.SET_BACKGROUND_SOUND,
    payload: {enabled},
} as const)

export const resetBackground = () => ({
    type: ACTION_TYPES.RESET_BACKGROUND,
    payload: {},
} as const)