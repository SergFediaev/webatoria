import {memo, ReactNode} from 'react'
import s from './ButtonIcon.module.css'

type ButtonIconPropsType = {
    children: ReactNode
    onClick: () => void
    title?: string
}

export const ButtonIcon = memo(({children, onClick, title}: ButtonIconPropsType) => <button className={s.buttonIcon}
                                                                                            onClick={onClick}
                                                                                            title={title}>{children}</button>)