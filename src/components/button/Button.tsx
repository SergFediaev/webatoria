import s from './Button.module.css'
import {memo} from 'react'
import {RENDERS, TYPES} from '../../constants'
import {logRender} from '../../utils'

type ButtonPropsType = {
    name: string
    onClick?: () => void
    title?: string
    type?: typeof TYPES.BUTTON | typeof TYPES.SUBMIT
}

export const Button = memo(({
                                name,
                                onClick,
                                title,
                                type = TYPES.BUTTON,
                            }: ButtonPropsType) => {
    logRender(RENDERS.BUTTON)
    return <button
        className={s.button}
        onClick={onClick}
        title={title}
        type={type}>{name}</button>
})