import {memo, ReactNode} from 'react'
import s from './ButtonIcon.module.css'
import {logRender} from '../../utils'
import {RENDERS} from '../../constants'

type ButtonIconPropsType = {
    children: ReactNode // ToDo: Refactor to name without children, like BaseButton.
    onClick?: () => void
    title?: string
    disabled?: boolean
}

export const ButtonIcon = memo(({
                                    children,
                                    onClick,
                                    title,
                                    disabled = false,
                                }: ButtonIconPropsType) => {
    logRender(RENDERS.BUTTON_ICON, children?.toString())
    return <button
        className={s.buttonIcon}
        onClick={onClick}
        title={title}
        disabled={disabled}>{children}</button>
})