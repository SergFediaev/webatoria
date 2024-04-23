import s from './Notification.module.css'
import {NotificationType} from '../../../types'
import {Button} from '../../button/Button'
import {useState} from 'react'
import {useAutoAnimate} from '@formkit/auto-animate/react'
import {useDispatch} from 'react-redux'
import {deleteNotification, setViewNotification} from '../../../store/actions'
import {STRINGS} from '../../../constants'

export const Notification = ({id, message, viewed, warning, actions}: NotificationType) => {
    //region Local state.
    const [hovered, setHovered] = useState(false)
    const [animate] = useAutoAnimate()
    const dispatch = useDispatch()
    //endregion

    //region Handlers.
    const view = () => dispatch(setViewNotification(id, !viewed))
    const handleDelete = () => dispatch(deleteNotification(id))
    const hover = () => setHovered(!hovered)
    //endregion

    return <div className={`${s.notification} ${warning && s.warning} ${viewed && s.viewed}`}
                onMouseEnter={hover}
                onMouseLeave={hover}
                ref={animate}>
        <p>{message}</p>
        {hovered && <div className={s.buttons}>
            <Button onClick={view} name={viewed ? STRINGS.UNVIEW : STRINGS.VIEW}/>
            <Button onClick={handleDelete} name={STRINGS.DELETE}/>
        </div>}
    </div>
}