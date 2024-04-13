import s from './Background.module.css'
import React from 'react'
import {VideoBackground} from '../videoBackground/VideoBackground'
import {logRender} from '../../utils'
import {RENDERS} from '../../constants'
// import {ColorBackground} from '../colorBackground/ColorBackground'
// import {WallpaperBackground} from '../wallpaperBackground/WallpaperBackground'
// import {overlay} from '../overlay/overlay'

export const Background = () => {
    logRender(RENDERS.BACKGROUND)
    return <div className={s.background}>
        {/*<ColorBackground/>*/}
        {/*<WallpaperBackground/>*/}
        <VideoBackground/>
        {/*<overlay/>*/}
    </div>
}