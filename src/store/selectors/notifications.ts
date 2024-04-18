import {StateType} from '../index'

export const selectNotifications = (state: StateType) => state.notifications

export const selectNotificationsCount = (state: StateType) => state.notifications.length

export const selectUnviewedNotificationsCount = (state: StateType) => state.notifications.reduce((count, notification) => !notification.viewed ? ++count : count, 0)