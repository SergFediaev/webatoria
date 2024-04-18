import {SoundActionsType} from '../../types'
import {ACTION_TYPES} from '../../constants'
import {SOUNDS} from '../sound'

const soundInitState = {
    playing: false,
    file: SOUNDS.NOTIFICATION,
}

type SoundType = typeof soundInitState

export const soundReducer = (sound: SoundType = soundInitState, action: SoundActionsType): SoundType => {
    const {type, payload} = action
    switch (type) {
        case ACTION_TYPES.PLAY_SOUND:
            return {
                ...sound, playing: true, file: payload.file,
            }
        case ACTION_TYPES.STOP_SOUND:
            return {
                ...sound, playing: false,
            }
        default:
            return sound
    }
}