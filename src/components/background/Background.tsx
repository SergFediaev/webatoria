import s from './Background.module.css'
import {memo} from 'react'
import {VideoBackground} from '../../videoBackground/VideoBackground'

export const Background = memo(() => {
    return <div className={s.background}>
        {/*<ColorBackground/>*/}
        {/*<WallpaperBackground/>*/}
        <VideoBackground/>
        {/*<Overlay/>*/}
    </div>
})