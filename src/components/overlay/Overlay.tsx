import {memo} from 'react'
import s from './Overlay.module.css'
import {logRender} from '../../utils'
import {RENDERS} from '../../constants'

type OverlayPropsType = { opacity?: number }

export const Overlay = memo(({opacity = .5}: OverlayPropsType) => {
    logRender(RENDERS.OVERLAY)
    return <div className={s.overlay} style={{opacity}}/>
})