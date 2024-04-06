import s from './VideoBackground.module.css'
import {memo} from 'react'
import video1 from '../assets/video/ocean.mp4'

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
                                     }: VideoBackgroundPropsType) => <div className={s.videoBackground}>
    <video src={video1}
           controls={controls}
           autoPlay={autoPlay}
           loop={loop}
           muted={muted}/>
</div>)