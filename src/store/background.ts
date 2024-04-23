import {OptionType} from '../components/select/Select'
import {STRINGS} from '../constants'
import wallpaper1 from '../assets/images/wallpaper1.jpg'
import wallpaper2 from '../assets/images/wallpaper2.jpg'
import wallpaper3 from '../assets/images/wallpaper3.jpg'
import wallpaper4 from '../assets/images/wallpaper4.jpg'
import ocean from '../assets/video/ocean.mp4'
import beach from '../assets/video/beach.mp4'
import fireplace from '../assets/video/fireplace.mp4'
import motivate from '../assets/video/motivate.mp4'
import lift from '../assets/video/lift.mp4'
import pain from '../assets/video/pain.mp4'
import rain_en from '../assets/video/rain_en.mp4'
import {BackgroundType, ColorsType, VideosType, WallpapersType} from '../types'

export const defaultBackground: BackgroundType = {
    variant: STRINGS.COLOR,
    color: STRINGS.GRAY.NAME,
    wallpaper: STRINGS.WALLPAPER1,
    video: STRINGS.OCEAN,
    overlay: false,
    sound: false,
}

export const backgrounds: OptionType[] = [
    {name: STRINGS.COLOR},
    {name: STRINGS.WALLPAPER},
    {name: STRINGS.RANDOM_WALLPAPER},
    {name: STRINGS.VIDEO},
]

export const colors: ColorsType = {
    [STRINGS.WHITE.NAME]: {name: STRINGS.WHITE.NAME, color: STRINGS.WHITE.COLOR},
    [STRINGS.WARM.NAME]: {name: STRINGS.WARM.NAME, color: STRINGS.WARM.COLOR},
    [STRINGS.RED.NAME]: {name: STRINGS.RED.NAME, color: STRINGS.RED.COLOR},
    [STRINGS.GREEN.NAME]: {name: STRINGS.GREEN.NAME, color: STRINGS.GREEN.COLOR},
    [STRINGS.BLUE.NAME]: {name: STRINGS.BLUE.NAME, color: STRINGS.BLUE.COLOR},
    [STRINGS.PURPLE.NAME]: {name: STRINGS.PURPLE.NAME, color: STRINGS.PURPLE.COLOR},
    [STRINGS.GRAY.NAME]: {name: STRINGS.GRAY.NAME, color: STRINGS.GRAY.COLOR},
    [STRINGS.BLACK.NAME]: {name: STRINGS.BLACK.NAME, color: STRINGS.BLACK.COLOR},
}

export const wallpapers: WallpapersType = {
    [STRINGS.WALLPAPER1]: {name: STRINGS.WALLPAPER1, file: wallpaper1},
    [STRINGS.WALLPAPER2]: {name: STRINGS.WALLPAPER2, file: wallpaper2},
    [STRINGS.WALLPAPER3]: {name: STRINGS.WALLPAPER3, file: wallpaper3},
    [STRINGS.WALLPAPER4]: {name: STRINGS.WALLPAPER4, file: wallpaper4},
}

export const videos: VideosType = {
    [STRINGS.OCEAN]: {name: STRINGS.OCEAN, file: ocean},
    [STRINGS.BEACH]: {name: STRINGS.BEACH, file: beach},
    [STRINGS.FIREPLACE]: {name: STRINGS.FIREPLACE, file: fireplace},
    [STRINGS.MOTIVATE]: {name: STRINGS.MOTIVATE, file: motivate},
    [STRINGS.LIFT]: {name: STRINGS.LIFT, file: lift},
    [STRINGS.PAIN]: {name: STRINGS.PAIN, file: pain},
    [STRINGS.RAIN]: {name: STRINGS.RAIN, file: rain_en},
}