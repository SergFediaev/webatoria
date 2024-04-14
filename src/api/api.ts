import {ERRORS, REQUEST_SPREADSHEET} from '../constants'
import {setCachedCards} from './storage'
import {CardType, SpreadsheetType} from '../types'
import {logError, parseSpreadsheetToCards} from '../utils'

export const getSpreadsheet = async () => {
    try {
        const response = await fetch(REQUEST_SPREADSHEET)
        const spreadsheet: SpreadsheetType = await response.json()
        const cards: CardType[] = parseSpreadsheetToCards(spreadsheet)
        setCachedCards(cards)
        return cards
    } catch (error) {
        logError(ERRORS.FETCHING_SPREADSHEET, error)
        return []
    }
}

export const postSpreadsheet = async (spreadsheet: SpreadsheetType) => {
    // TODO: postSpreadsheet by users.
}