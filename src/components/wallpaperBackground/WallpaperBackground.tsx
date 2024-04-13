import s from './WallpaperBackground.module.css'
import wallpaper1 from '../../assets/images/wallpaper1.jpg'
import {logRender} from '../../store/settings/settingsHelpers'
import {RENDERS} from '../../constants'

export const WallpaperBackground = () => {
    logRender(RENDERS.WALLPAPER_BACKGROUND)
    return <div className={s.wallpaperBackground}
                style={{backgroundImage: `url(${wallpaper1})`}}/>
}