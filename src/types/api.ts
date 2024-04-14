export type SpreadsheetType = {
    spreadsheetId: string
    properties: SpreadsheetPropertiesType
    sheets: SheetType[]
    spreadsheetUrl: string
}

type SpreadsheetPropertiesType = {
    title: string
    locale: string
    autoRecalc: string
    timeZone: string
    defaultFormat: any
    spreadsheetTheme: any
}

type SheetType = {
    properties: SheetPropertiesType
    data: SheetDataType[]
}

type SheetPropertiesType = {
    sheetId: number
    title: string
    index: number
    sheetType: string
    gridProperties: SheetGridPropertiesType
}

type SheetGridPropertiesType = {
    rowCount: number
    columnCount: number
    frozenRowCount: number
}

type SheetDataType = {
    rowData: SheetRowDataType[]
    rowMetadata: any[]
    columnMetadata: any[]
}

type SheetRowDataType = {
    values: SheetRowDataValueType[]
}

type SheetRowDataValueType = {
    formattedValue: string
    userEnteredValue: any
    effectiveValue: any
    effectiveFormat: any
    textFormatRuns?: any[]
}