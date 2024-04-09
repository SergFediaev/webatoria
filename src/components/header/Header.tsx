import {memo} from 'react'
import s from './Header.module.css'
import {EMOJIS, PATHS, RENDERS, TITLES} from '../../constants'
import {ButtonIcon} from '../buttonIcon/ButtonIcon'
import {Select} from '../select/Select'
import {cardOptions} from '../../store/cards/cards'
import {useDispatch, useSelector} from 'react-redux'
import {StoreType} from '../../store/store'
import {FilterType, SettingsType} from '../../store/settings/settingsTypes'
import {changeFilter, setReadingMode} from '../../store/settings/settingsActions'
import {useLocation, useNavigate} from 'react-router-dom'
import {logRender} from '../../store/settings/settingsHelpers'

export const Header = memo(() => {
    logRender(RENDERS.HEADER)

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
    const createCard = () => navigate(PATHS.CREATE_CARD)
    const stub = () => {} // TODO: remove stub.
    const isDashboard = pathname === PATHS.DASHBOARD
    const creating = pathname === PATHS.CREATE_CARD
    const showMode = pathname !== PATHS.CREATE_CARD && pathname !== PATHS.ERROR_404
    //endregion

    return <header className={s.header}>
        <h1>Webat<span className={s.logo}>{EMOJIS.LOGO}</span>ria</h1>
        <nav>
            {!isDashboard && <ButtonIcon onClick={goHome}
                                         title={TITLES.GO_HOME}>{EMOJIS.HOME}</ButtonIcon>}
            {isDashboard && <Select selectedOption={settings.filter}
                                    options={cardOptions}
                                    setSelected={option => changeFilterHandler(option as FilterType)}/>}
            {showMode && <ButtonIcon onClick={setReadingModeHandler}
                                     title={settings.readingMode
                                         ? TITLES.TRAINING
                                         : TITLES.READ}>{settings.readingMode
                ? EMOJIS.TRAINING
                : EMOJIS.READ}
            </ButtonIcon>}
            {!creating && <ButtonIcon onClick={createCard}
                                      title={TITLES.ADD}>{EMOJIS.ADD}</ButtonIcon>}
            <ButtonIcon onClick={stub}
                        title={'Settings coming soon'} // TODO: Settings constant + disabled.
                        disabled={true}>{EMOJIS.SETTINGS}</ButtonIcon>
        </nav>
    </header>
})