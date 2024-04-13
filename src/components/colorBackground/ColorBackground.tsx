import s from './ColorBackground.module.css'
import {logRender} from '../../utils'
import {RENDERS} from '../../constants'

export const ColorBackground = () => {
    logRender(RENDERS.COLOR_BACKGROUND)
    return <div className={s.colorBackground}/>
}