import s from './VideoBackground.module.css'
import {memo} from 'react'
import video1 from '../../assets/video/video1.mp4'
import {logRender} from '../../utils'
import {RENDERS} from '../../constants'

type VideoBackgroundPropsType = {
    controls?: boolean
    autoPlay?: boolean
    loop?: boolean
    muted?: boolean
}

export const VideoBackground = memo(({
                                         controls = false,
                                         autoPlay = true,
                                         loop = true,
                                         muted = true,
                                     }: VideoBackgroundPropsType) => {
    logRender(RENDERS.VIDEO_BACKGROUND)
    return <div className={s.videoBackground}>
        <video src={video1}
               controls={controls}
               autoPlay={autoPlay}
               loop={loop}
               muted={muted}/>
    </div>
})