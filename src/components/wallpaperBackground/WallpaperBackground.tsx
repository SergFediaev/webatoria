import s from './WallpaperBackground.module.css'
import {logRender} from '../../utils'
import {LINKS, RENDERS, STRINGS} from '../../constants'
import {useSelector} from 'react-redux'
import {selectBackgroundVariant, selectBackgroundWallpaper} from '../../store/selectors'
import {wallpapers} from '../../store/background'

export const WallpaperBackground = () => {
    logRender(RENDERS.WALLPAPER_BACKGROUND)
    const variant = useSelector(selectBackgroundVariant)
    const wallpaper = useSelector(selectBackgroundWallpaper)
    const image = variant === STRINGS.WALLPAPER ? wallpapers[wallpaper].file : LINKS.RANDOM_BACKGROUND_URL
    const backgroundImage = `url(${image})`

    return <div className={s.wallpaperBackground} style={{backgroundImage}}/>
}