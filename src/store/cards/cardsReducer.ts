import {CardType, getCards} from './cards'
import {ACTION_TYPES} from '../../constants'
import {CardActionsType} from './cardsTypes'

export const cardsReducer = (cards: CardType[] = getCards(), action: CardActionsType): CardType[] => {
    switch (action.type) {
        case ACTION_TYPES.LIKE_CARD:
            return cards
        default:
            return cards
    }
}