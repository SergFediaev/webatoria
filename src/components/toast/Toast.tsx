import s from './Toast.module.css'
import {useEffect, useState} from 'react'
import {TIME, TITLES} from '../../constants'

type ToastPropsType = {
    message: string
    timeout?: number
    warning?: boolean
}

export const Toast = ({message, timeout = TIME.LOADING_TIMEOUT, warning}: ToastPropsType) => {
    const [dismiss, setDismiss] = useState(false)
    useEffect(() => {
        const timeoutId = setTimeout(handleDismiss, timeout)
        return () => clearTimeout(timeoutId)
    }, [timeout])

    const handleDismiss = () => setDismiss(true)

    return dismiss
        ? <></>
        : <div className={s.toastContainer}
               onClick={handleDismiss}
               title={TITLES.DISMISS}>
            <div className={`${s.toast} ${warning && s.warning}`}>{message}</div>
        </div>
}