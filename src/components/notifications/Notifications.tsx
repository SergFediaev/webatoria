import s from './Notifications.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {selectNotifications} from '../../store/selectors'
import {Notification} from './Notification/Notification'
import {Button} from '../button/Button'
import {clearNotifications, setViewNotifications} from '../../store/actions'
import {ButtonIcon} from '../buttonIcon/ButtonIcon'
import {EMOJIS, STRINGS, TITLES} from '../../constants'

type NotificationsPropsType = {
    close: () => void
}

export const Notifications = ({close}: NotificationsPropsType) => {
    //region Local state.
    const dispatch = useDispatch()
    const notifications = useSelector(selectNotifications)
    const showNotifications = notifications.length > 0
    const unviewedNotifications = notifications.some(notification => !notification.viewed)
    const viewedNotifications = notifications.some(notification => notification.viewed)
    //endregion

    //region Handlers.
    const view = () => dispatch(setViewNotifications(true))
    const unview = () => dispatch(setViewNotifications(false))
    const clear = () => {
        dispatch(clearNotifications())
        close()
    }
    //endregion

    const notificationsElements = notifications.map(notification => <Notification key={notification.id}
                                                                                  id={notification.id}
                                                                                  message={notification.message}
                                                                                  viewed={notification.viewed}
                                                                                  warning={notification.warning}
                                                                                  actions={notification.actions}/>)

    return <div className={s.notifications}>
        <header>
            <div className={s.title}>
                <h3>{TITLES.NOTIFICATIONS}</h3>
                <ButtonIcon onClick={close}
                            title={TITLES.CLOSE}>{EMOJIS.CANCEL}</ButtonIcon>
            </div>
            {showNotifications && <div className={s.buttons}>
                {unviewedNotifications && <Button onClick={view} name={STRINGS.VIEW_ALL}/>}
                {viewedNotifications && <Button onClick={unview} name={STRINGS.UNVIEW_ALL}/>}
                <Button onClick={clear} name={STRINGS.CLEAR_ALL}/>
            </div>}
        </header>
        {notificationsElements}
    </div>
}