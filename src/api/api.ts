import {APIS, ERRORS, REQUEST_GET_CARDS_FROM_SPREADSHEET, REQUEST_POST_CARD_TO_SPREADSHEET, STRINGS} from '../constants'
import {ApiResponseType, CardType, SpreadsheetCardType, SpreadsheetType} from '../types'
import {createApiResponseError, createApiResponseSuccess, logError, parseSpreadsheetToCards} from '../utils'
import {setCachedCards} from './storage'

export const getCardsFromSpreadsheet = async () => {
    try {
        const response = await fetch(REQUEST_GET_CARDS_FROM_SPREADSHEET)
        const spreadsheet: SpreadsheetType = await response.json()
        const cards: CardType[] = parseSpreadsheetToCards(spreadsheet)
        setCachedCards(cards)
        return cards
    } catch (error) {
        logError(ERRORS.FETCHING_SPREADSHEET, error)
        return []
    }
}

export const postCardToSpreadsheet = async (card: SpreadsheetCardType): Promise<ApiResponseType> => {
    try {
        const response = await fetch(REQUEST_POST_CARD_TO_SPREADSHEET, {
            method: APIS.POST,
            headers: {[APIS.CONTENT_TYPE]: APIS.APPLICATION_JSON},
            body: JSON.stringify(card),
        })

        if (response.ok) {
            const responseData = await response.json()
            return createApiResponseSuccess(`${STRINGS.CARD_ADDED}${responseData}`)
        } else return createApiResponseError(`${ERRORS.ADDING_CARD}${response.status}`)
    } catch (error) {
        return createApiResponseError(`${ERRORS.ADDING_CARD}${error}`)
    }
}