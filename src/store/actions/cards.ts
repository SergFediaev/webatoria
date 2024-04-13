import {ACTION_TYPES} from '../../constants'

export const likeCard = (id: string) => ({
    type: ACTION_TYPES.LIKE_CARD,
    payload: {
        id,
    },
} as const)

export const dislikeCard = (id: string) => ({
    type: ACTION_TYPES.DISLIKE_CARD,
    payload: {
        id,
    },
} as const)