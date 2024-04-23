import s from './Background.module.css'
import React from 'react'
import {VideoBackground} from '../videoBackground/VideoBackground'
import {logRender} from '../../utils'
import {RENDERS, STRINGS} from '../../constants'
import {Overlay} from '../overlay/Overlay'
import {useSelector} from 'react-redux'
import {selectBackgroundOverlay, selectBackgroundSound, selectBackgroundVariant} from '../../store/selectors'
import {ColorBackground} from '../colorBackground/ColorBackground'
import {WallpaperBackground} from '../wallpaperBackground/WallpaperBackground'

export const Background = () => {
    logRender(RENDERS.BACKGROUND)
    const variant = useSelector(selectBackgroundVariant)
    const sound = useSelector(selectBackgroundSound)
    const overlay = useSelector(selectBackgroundOverlay)
    const color = variant === STRINGS.COLOR
    const wallpaper = variant === STRINGS.WALLPAPER || variant === STRINGS.RANDOM_WALLPAPER
    const video = variant === STRINGS.VIDEO

    return <div className={s.background}>
        {color && <ColorBackground/>}
        {wallpaper && <WallpaperBackground/>}
        {video && <VideoBackground muted={!sound}/>}
        {overlay && <Overlay/>}
    </div>
}