import s from './VideoBackground.module.css'
import {memo, useRef} from 'react'
import {logRender, setVideoTranslation} from '../../utils'
import {DEFAULT_VALUES, RENDERS} from '../../constants'
import {useSelector} from 'react-redux'
import {selectBackgroundVideo, selectSettingsLanguage} from '../../store/selectors'
import {videos} from '../../store/background'

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

    setVideoTranslation(useSelector(selectSettingsLanguage))
    const source = videos[useSelector(selectBackgroundVideo)].file
    const video = useRef<HTMLVideoElement>(null)
    if (video.current) video.current.volume = DEFAULT_VALUES.SOUND_VOLUME

    return <div className={s.videoBackground}>
        <video src={source}
               controls={controls}
               autoPlay={autoPlay}
               loop={loop}
               muted={muted}
               ref={video}/>
    </div>
})