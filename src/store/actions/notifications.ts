import {ACTION_TYPES} from '../../constants'
import {NotificationActionType} from '../../types'

export const addNotification = (message: string, warning?: boolean, actions?: NotificationActionType[]) => ({
    type: ACTION_TYPES.ADD_NOTIFICATION,
    payload: {message, warning, actions},
} as const)

export const setViewNotifications = (viewed: boolean) => ({
    type: ACTION_TYPES.SET_VIEW_NOTIFICATIONS,
    payload: {viewed},
} as const)

export const setViewNotification = (id: string, viewed: boolean) => ({
    type: ACTION_TYPES.SET_VIEW_NOTIFICATION,
    payload: {id, viewed},
} as const)

export const clearNotifications = () => ({
    type: ACTION_TYPES.CLEAR_NOTIFICATIONS,
    payload: {},
} as const)

export const deleteNotification = (id: string) => ({
    type: ACTION_TYPES.DELETE_NOTIFICATION,
    payload: {id},
} as const)