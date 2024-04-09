import s from './WallpaperBackground.module.css'
import {memo} from 'react'
import wallpaper1 from '../../assets/images/wallpaper1.jpg'
import {logRender} from '../../store/settings/settingsHelpers'
import {RENDERS} from '../../constants'

type WallpaperBackgroundPropsType = {}

export const WallpaperBackground = memo(({...props}: WallpaperBackgroundPropsType) => {
    logRender(RENDERS.WALLPAPER_BACKGROUND)
    return <div className={s.wallpaperBackground}
                style={{backgroundImage: `url(${wallpaper1})`}}/>
})