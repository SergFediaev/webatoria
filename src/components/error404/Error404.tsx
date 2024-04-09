import s from './Error404.module.css'
import {memo} from 'react'
import {logRender} from '../../store/settings/settingsHelpers'
import {RENDERS} from '../../constants'

type Error404PropsType = {}

export const Error404 = memo(({...props}: Error404PropsType) => {
    logRender(RENDERS.ERROR_404)
    return <div className={s.error404}>404</div>
})