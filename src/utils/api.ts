import {FormElementType} from '../types'

export const getFormElementValue = (element: FormElementType) => (element as HTMLInputElement).value

export const createApiResponseSuccess = (data?: string) => ({data} as const)

export const createApiResponseError = (error?: string) => ({error} as const)