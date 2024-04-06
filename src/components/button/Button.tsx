import s from './Button.module.css'
import {memo, ReactNode} from 'react'
import {TYPES} from '../../constants'

type ButtonPropsType = {
    children: ReactNode
    onClick?: () => void
    title?: string
    type?: typeof TYPES.BUTTON | typeof TYPES.SUBMIT
}

export const Button = memo(({
                                children,
                                onClick,
                                title,
                                type = TYPES.BUTTON,
                            }: ButtonPropsType) => <button
    className={s.button}
    onClick={onClick}
    title={title}
    type={type}>{children}</button>)