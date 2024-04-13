import s from './ColorBackground.module.css'
import {logRender} from '../../store/settings/settingsHelpers'
import {RENDERS} from '../../constants/renders'

export const ColorBackground = () => {
    logRender(RENDERS.COLOR_BACKGROUND)
    return <div className={s.colorBackground}/>
}