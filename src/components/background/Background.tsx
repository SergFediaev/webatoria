import s from './Background.module.css'
import React, {memo} from 'react'
import {VideoBackground} from '../videoBackground/VideoBackground'
import {logRender} from '../../store/settings/settingsHelpers'
import {RENDERS} from '../../constants'
// import {ColorBackground} from '../colorBackground/ColorBackground'
// import {WallpaperBackground} from '../wallpaperBackground/WallpaperBackground'
// import {Overlay} from '../Overlay/Overlay'

export const Background = memo(() => {
    logRender(RENDERS.BACKGROUND)
    return <div className={s.background}>
        {/*<ColorBackground/>*/}
        {/*<WallpaperBackground/>*/}
        <VideoBackground/>
        {/*<Overlay/>*/}
    </div>
})