import {
    resetBackground,
    setBackgroundColor,
    setBackgroundOverlay,
    setBackgroundSound,
    setBackgroundVariant,
    setBackgroundVideo,
    setBackgroundWallpaper,
} from '../store/actions'
import {STRINGS} from '../constants'

export type BackgroundType = {
    variant: BackgroundVariantType
    color: string
    wallpaper: string
    video: string
    overlay: boolean
    sound: boolean
}

export type BackgroundVariantType = typeof STRINGS.COLOR
    | typeof STRINGS.WALLPAPER
    | typeof STRINGS.RANDOM_WALLPAPER
    | typeof STRINGS.VIDEO

export type BackgroundActionsType = ReturnType<typeof setBackgroundVariant>
    | ReturnType<typeof setBackgroundColor>
    | ReturnType<typeof setBackgroundWallpaper>
    | ReturnType<typeof setBackgroundVideo>
    | ReturnType<typeof setBackgroundOverlay>
    | ReturnType<typeof setBackgroundSound>
    | ReturnType<typeof resetBackground>

export type ColorsType = {
    [color: string]: { name: string, color: string }
}

export type WallpapersType = {
    [wallpaper: string]: { name: string, file: string }
}

export type VideosType = {
    [video: string]: { name: string, file: string }
}