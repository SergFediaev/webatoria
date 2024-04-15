import {CardType} from '../types'
import {KEYS} from '../constants'
import {getCardsFromSpreadsheet} from './api'

export const getCachedCards = () => {
    const cachedCards = sessionStorage.getItem(KEYS.CARDS)
    return cachedCards ? JSON.parse(cachedCards) : getCardsFromSpreadsheet()
}

export const setCachedCards = (cards: CardType[]) => sessionStorage.setItem(KEYS.CARDS, JSON.stringify(cards))