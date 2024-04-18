import {NotificationActionType, NotificationType} from '../types'
import {v1} from 'uuid'

export const createNotification = (message: string, warning: boolean = false, actions: NotificationActionType[] = []): NotificationType => ({
    id: v1(),
    message,
    viewed: false,
    warning,
    actions,
})