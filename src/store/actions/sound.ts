import {ACTION_TYPES} from '../../constants'

export const playSound = (file: string) => ({
    type: ACTION_TYPES.PLAY_SOUND,
    payload: {file},
} as const)

export const stopSound = () => ({
    type: ACTION_TYPES.STOP_SOUND,
    payload: {},
} as const)