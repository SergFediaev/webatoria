import {playSound, stopSound} from '../store/actions'

export type SoundActionsType = ReturnType<typeof playSound> | ReturnType<typeof stopSound>