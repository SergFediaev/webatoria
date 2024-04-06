import {memo} from 'react'
import s from './Overlay.module.css'

type OverlayPropsType = { opacity?: number }

export const Overlay = memo(({opacity = .5}: OverlayPropsType) => <div className={s.overlay} style={{opacity}}/>)