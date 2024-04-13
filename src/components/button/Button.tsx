import s from './Button.module.css'
import {memo, ReactNode} from 'react'
import {logRender} from '../../store/settings/settingsHelpers'
import {RENDERS} from '../../constants/renders'
import {TYPES} from '../../constants/types'

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
                            }: ButtonPropsType) => {
    logRender(RENDERS.BUTTON)
    return <button
        className={s.button}
        onClick={onClick}
        title={title}
        type={type}>{children}</button>
})