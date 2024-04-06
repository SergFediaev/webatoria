import s from './Background.module.css'
import React, {memo} from 'react'
import {VideoBackground} from '../videoBackground/VideoBackground'
// import {ColorBackground} from '../colorBackground/ColorBackground'
// import {WallpaperBackground} from '../wallpaperBackground/WallpaperBackground'
// import {Overlay} from '../Overlay/Overlay'

export const Background = memo(() => {
    return <div className={s.background}>
        {/*<ColorBackground/>*/}
        {/*<WallpaperBackground/>*/}
        <VideoBackground/>
        {/*<Overlay/>*/}
    </div>
})