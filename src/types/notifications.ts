import {
    addNotification,
    clearNotifications,
    deleteNotification,
    setViewNotification,
    setViewNotifications,
} from '../store/actions'

export type NotificationType = {
    id: string
    message: string
    viewed: boolean
    warning?: boolean
    actions?: NotificationActionType[]
}

export type NotificationActionType = {
    title: string
    action: () => void
}

export type NotificationsActionType = ReturnType<typeof addNotification>
    | ReturnType<typeof setViewNotifications>
    | ReturnType<typeof setViewNotification>
    | ReturnType<typeof clearNotifications>
    | ReturnType<typeof deleteNotification>