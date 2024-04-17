import {logRender} from '../../utils'
import {EMOJIS, PATHS, RENDERS, TITLES} from '../../constants'
import {useDispatch, useSelector} from 'react-redux'
import {useLocation, useNavigate} from 'react-router-dom'
import {ButtonIcon} from '../buttonIcon/ButtonIcon'
import {Select} from '../select/Select'
import s from './Header.module.css'
import {selectSettings} from '../../store/selectors'
import {FilterType} from '../../types'
import {changeFilter, setReadingMode} from '../../store/actions'
import {cardOptions} from '../../store/cards'
import {Search} from '../search/Search'

export const Header = () => {
    logRender(RENDERS.HEADER)

    //region Local state.
    const settings = useSelector(selectSettings)
    const dispatch = useDispatch()
    const {pathname} = useLocation()
    const navigate = useNavigate()
    //endregion

    //region Handlers.
    const changeFilterHandler = (filter: FilterType) => dispatch(changeFilter(filter))
    const setReadingModeHandler = () => dispatch(setReadingMode(!settings.readingMode))
    const goHome = () => navigate(PATHS.DASHBOARD)
    const createCard = () => navigate(PATHS.CREATE_CARD)
    const isDashboard = pathname === PATHS.DASHBOARD
    const creating = pathname === PATHS.CREATE_CARD
    const showMode = pathname !== PATHS.CREATE_CARD && pathname !== PATHS.ERROR_404
    //endregion

    return <header className={s.header}>
        <h1>Webat<span className={s.logo}>{EMOJIS.LOGO}</span>ria</h1>
        {isDashboard && <Search/>}
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
            <ButtonIcon title={'Settings coming soon'} // TODO: Settings constant + disabled.
                        disabled={true}>{EMOJIS.SETTINGS}</ButtonIcon>
        </nav>
    </header>
}