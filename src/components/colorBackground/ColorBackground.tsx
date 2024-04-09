import s from './ColorBackground.module.css'
import {memo} from 'react'
import {logRender} from '../../store/settings/settingsHelpers'
import {RENDERS} from '../../constants'

export const ColorBackground = memo(() => {
    logRender(RENDERS.COLOR_BACKGROUND)
    return <div className={s.colorBackground}/>
})