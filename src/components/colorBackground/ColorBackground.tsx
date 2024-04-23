import s from './ColorBackground.module.css'
import {logRender} from '../../utils'
import {RENDERS} from '../../constants'
import {useSelector} from 'react-redux'
import {selectBackgroundColor} from '../../store/selectors'
import {colors} from '../../store/background'

export const ColorBackground = () => {
    logRender(RENDERS.COLOR_BACKGROUND)
    const backgroundColor = colors[useSelector(selectBackgroundColor)].color
    return <div className={s.colorBackground} style={{backgroundColor}}/>
}