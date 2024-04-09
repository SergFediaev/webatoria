import {memo, ReactNode} from 'react'
import s from './ButtonIcon.module.css'
import {logRender} from '../../store/settings/settingsHelpers'
import {RENDERS} from '../../constants'

type ButtonIconPropsType = {
    children: ReactNode
    onClick: () => void
    title?: string
    disabled?: boolean
}

export const ButtonIcon = memo(({
                                    children,
                                    onClick,
                                    title,
                                    disabled = false,
                                }: ButtonIconPropsType) => {
    logRender(RENDERS.BUTTON_ICON)
    return <button
        className={s.buttonIcon}
        onClick={onClick}
        title={title}
        disabled={disabled}>{children}</button>
})