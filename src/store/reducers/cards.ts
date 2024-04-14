import {CardActionsType, CardType} from '../../types'
import {ACTION_TYPES} from '../../constants'

const initialState: CardType[] = []

export const cardsReducer = (cards: CardType[] = initialState, action: CardActionsType): CardType[] => {
    const {type, payload} = action
    switch (type) {
        case ACTION_TYPES.SET_CARDS:
            return payload.cards
        case ACTION_TYPES.LIKE_CARD:
            return cards.map(card => card.id === payload.id ? {...card, likes: ++card.likes} : card)
        case ACTION_TYPES.DISLIKE_CARD:
            return cards.map(card => card.id === payload.id ? {...card, dislikes: ++card.dislikes} : card)
        default:
            return cards
    }
}