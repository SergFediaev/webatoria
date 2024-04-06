import {memo, ReactNode} from 'react'
import s from './ButtonIcon.module.css'

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
                                }: ButtonIconPropsType) => <button
    className={s.buttonIcon}
    onClick={onClick}
    title={title}
    disabled={disabled}>{children}</button>)