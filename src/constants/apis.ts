export const APIS = {
    EMAIL_SERVICE_ID: 'service_n3nrak7',
    EMAIL_TEMPLATE_ID: 'template_97urqzc',
    EMAIL_PUBLIC_KEY: 'qp-wrSoJJNl8UcFFy',
    SPREADSHEET_API_PUBLIC_KEY: 'AIzaSyCbsqmhqmFF8JXuAQUzfJdfqx7Gu8-9cIQ',
    SPREADSHEET_ID: '1SY1k_wf3slGCLZDcnDTmDGIPii6AYfBOLxFd_ME5FUE',
    SPREADSHEET_RANGE: 'Database',
    SHEETDB_ID: 'csc6qdiqdot58',
    POST: 'POST',
    CONTENT_TYPE: 'Content-Type',
    APPLICATION_JSON: 'application/json',
} as const

export const REQUEST_GET_CARDS_FROM_SPREADSHEET = `https://sheets.googleapis.com/v4/spreadsheets/${APIS.SPREADSHEET_ID}?ranges=${APIS.SPREADSHEET_RANGE}&includeGridData=true&key=${APIS.SPREADSHEET_API_PUBLIC_KEY}` as const

export const REQUEST_POST_CARD_TO_SPREADSHEET = `https://sheetdb.io/api/v1/${APIS.SHEETDB_ID}` as const