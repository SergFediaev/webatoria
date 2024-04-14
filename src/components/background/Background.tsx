import s from './Background.module.css'
import React from 'react'
import {VideoBackground} from '../videoBackground/VideoBackground'
import {logRender} from '../../utils'
import {RENDERS} from '../../constants'
// import {Overlay} from '../overlay/Overlay'
// import {ColorBackground} from '../colorBackground/ColorBackground'
// import {WallpaperBackground} from '../wallpaperBackground/WallpaperBackground'

export const Background = () => {
    logRender(RENDERS.BACKGROUND)
    return <div className={s.background}>
        {/*<ColorBackground/>*/}
        {/*<WallpaperBackground/>*/}
        <VideoBackground/>
        {/*<Overlay/>*/}
    </div>
}