import {useDispatch, useSelector} from 'react-redux'
import {useEffect, useRef} from 'react'
import {stopSound} from '../../store/actions'
import {DEFAULT_VALUES, TYPES} from '../../constants'
import {log} from '../../utils'
import {selectSound} from '../../store/selectors'

export const SoundPlayer = () => {
    const sound = useSelector(selectSound)
    const dispatch = useDispatch()
    const audio = useRef<HTMLAudioElement>(null)
    const player = audio.current

    useEffect(() => {
        if (!player) return

        const logSound = () => log(sound.file) // TODO: Add log text.
        const handleStopSound = () => dispatch(stopSound())
        player.addEventListener(TYPES.ENDED, handleStopSound)
        player.volume = DEFAULT_VALUES.SOUND_VOLUME

        if (sound.playing) player.play().finally(logSound)
        else player.pause()

        return () => {
            player.pause()
            player.removeEventListener(TYPES.ENDED, handleStopSound)
        }
    }, [player, dispatch, sound.playing, sound.file])

    return <audio src={sound.file} ref={audio}/>
}