import {memo} from 'react'
import s from './Header.module.css'
import {EMOJIS, PATHS, TITLES} from '../../constants'
import {ButtonIcon} from '../buttonIcon/ButtonIcon'
import {Select} from '../select/Select'
import {cardOptions} from '../../store/cards/cards'
import {useDispatch, useSelector} from 'react-redux'
import {StoreType} from '../../store/store'
import {FilterType, SettingsType} from '../../store/settings/settingsTypes'
import {changeFilter, setReadingMode} from '../../store/settings/settingsActions'
import {useLocation, useNavigate} from 'react-router-dom'

export const Header = memo(() => {
    //region Local state.
    const settings = useSelector<StoreType, SettingsType>(state => state.settings)
    const dispatch = useDispatch()
    const {pathname} = useLocation()
    const navigate = useNavigate()
    //endregion

    //region Handlers.
    const changeFilterHandler = (filter: FilterType) => dispatch(changeFilter(filter))
    const setReadingModeHandler = () => dispatch(setReadingMode(!settings.readingMode))
    const goHome = () => navigate(PATHS.DASHBOARD)
    const stub = () => {}
    const showHome = pathname !== PATHS.DASHBOARD
    const showSort = pathname === PATHS.DASHBOARD
    //endregion

    return <header className={s.header}>
        <h1>Webat<span className={s.logo}>{EMOJIS.LOGO}</span>ria</h1>
        <nav>
            {showSort && <Select selectedOption={settings.filter}
                                 options={cardOptions}
                                 setSelected={option => changeFilterHandler(option as FilterType)}/>}
            {showHome && <ButtonIcon onClick={goHome}
                                     title={TITLES.GO_HOME}>{EMOJIS.HOME}</ButtonIcon>}
            <ButtonIcon onClick={setReadingModeHandler}
                        title={settings.readingMode
                            ? TITLES.TRAINING
                            : TITLES.READ}>{settings.readingMode
                ? EMOJIS.TRAINING
                : EMOJIS.READ}
            </ButtonIcon>
            <ButtonIcon onClick={stub}
                        title={TITLES.ADD}>{EMOJIS.ADD}</ButtonIcon>
            <ButtonIcon onClick={stub}
                        title={TITLES.SETTINGS}>{EMOJIS.SETTINGS}</ButtonIcon>
        </nav>
    </header>
})