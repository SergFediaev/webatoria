import {CardType, SpreadsheetType} from '../types'
import {STRINGS} from '../constants'
import {getRandomInteger} from './mock'

export const parseSpreadsheetToCards = (spreadsheet: SpreadsheetType): CardType[] => spreadsheet.sheets[0].data[0].rowData.slice(1).map((row, index) => {
    const [title, text, tagsString] = row.values.map(cell => cell.formattedValue)
    const tags = tagsString ? tagsString.split(STRINGS.COMMA_SEPARATOR) : []

    return {
        title,
        text,
        tags,
        id: index.toString(),
        likes: getRandomInteger(),
        dislikes: getRandomInteger(),
        comments: Array<string>(getRandomInteger()),
        favorite: false,
    }
})