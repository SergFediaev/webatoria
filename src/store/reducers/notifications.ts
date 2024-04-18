import {NotificationsActionType, NotificationType} from '../../types'
import {ACTION_TYPES} from '../../constants'
import {createNotification} from '../../utils'

const notificationsInitState: NotificationType[] = []

export const notificationsReducer = (notifications: NotificationType[] = notificationsInitState, action: NotificationsActionType): NotificationType[] => {
    const {type, payload} = action
    switch (type) {
        case ACTION_TYPES.ADD_NOTIFICATION:
            return [createNotification(payload.message, payload.warning, payload.actions), ...notifications]
        case ACTION_TYPES.SET_VIEW_NOTIFICATIONS:
            return notifications.map(notification => ({...notification, viewed: payload.viewed}))
        case ACTION_TYPES.SET_VIEW_NOTIFICATION:
            return notifications.map(notification => notification.id === payload.id ? {
                ...notification,
                viewed: payload.viewed,
            } : notification)
        case ACTION_TYPES.CLEAR_NOTIFICATIONS:
            return []
        case ACTION_TYPES.DELETE_NOTIFICATION:
            return notifications.filter(notification => notification.id !== payload.id)
        default:
            return notifications
    }
}