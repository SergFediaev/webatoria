import {ACTION_TYPES} from '../../constants'

export const likeCard = () => ({
    type: ACTION_TYPES.LIKE_CARD,
} as const)