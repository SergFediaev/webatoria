import s from './ColorBackground.module.css'
import {memo} from 'react'

type ColorBackgroundPropsType = {}

export const ColorBackground = memo((props: ColorBackgroundPropsType) => <div className={s.colorBackground}/>)