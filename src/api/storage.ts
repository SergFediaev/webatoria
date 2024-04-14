import {CardType} from '../types'
import {KEYS} from '../constants'
import {getSpreadsheet} from './api'

export const getCachedCards = () => {
    const cachedCards = sessionStorage.getItem(KEYS.CARDS)
    return cachedCards ? JSON.parse(cachedCards) : getSpreadsheet()
}

export const setCachedCards = (cards: CardType[]) => sessionStorage.setItem(KEYS.CARDS, JSON.stringify(cards))