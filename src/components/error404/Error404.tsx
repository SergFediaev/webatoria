import s from './Error404.module.css'
import {logRender} from '../../store/settings/settingsHelpers'
import {RENDERS} from '../../constants/renders'

export const Error404 = () => {
    logRender(RENDERS.ERROR_404)
    return <div className={s.error404}>404</div>
}