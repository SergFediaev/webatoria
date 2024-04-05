import {CardType, getCards} from './cards'
import {ACTION_TYPES} from '../../constants'
import {CardActionsType} from './cardsTypes'

export const cardsReducer = (cards: CardType[] = getCards(), action: CardActionsType): CardType[] => {
    const {type, payload} = action
    switch (type) {
        case ACTION_TYPES.LIKE_CARD:
            return cards.map(card => card.id === payload.id ? {...card, likes: ++card.likes} as CardType : card)
        default:
            return cards
    }
}