import {ACTION_TYPES} from '../../constants'

export const likeCard = (id: string) => ({
    type: ACTION_TYPES.LIKE_CARD,
    payload: {
        id,
    },
} as const)