import {ACTION_TYPES} from '../../constants'
import {CardType} from '../../types'

export const setCards = (cards: CardType[]) => ({
    type: ACTION_TYPES.SET_CARDS,
    payload: {
        cards,
    },
} as const)

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