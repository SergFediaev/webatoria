import {logRender} from '../../utils'
import {EMOJIS, PATHS, RENDERS, TITLES} from '../../constants'
import {useDispatch, useSelector} from 'react-redux'
import {useLocation, useNavigate} from 'react-router-dom'
import {ButtonIcon} from '../buttonIcon/ButtonIcon'
import {Select} from '../select/Select'
import s from './Header.module.css'
import {selectSettings} from '../../store/selectors'
import {Search} from '../search/Search'
import {changeFilter, changeSort, setReadingMode} from '../../store/actions'
import {FilterType, SortType} from '../../types'
import {filterOptions, sortOptions} from '../../store/settings'

export const Header = () => {
    logRender(RENDERS.HEADER)

    //region Local state.
    const settings = useSelector(selectSettings)
    const dispatch = useDispatch()
    const {pathname} = useLocation()
    const navigate = useNavigate()
    //endregion

    //region Handlers.
    const changeFilterHandler = (filter: string) => dispatch(changeFilter(filter as FilterType))
    const changeSortHandler = (sort: string) => dispatch(changeSort(sort as SortType))
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
            {isDashboard && <>
                <Select selectedOption={settings.filter}
                        options={filterOptions}
                        setSelected={option => changeFilterHandler(option)}/>
                <Select selectedOption={settings.sort}
                        options={sortOptions}
                        setSelected={option => changeSortHandler(option)}/>
            </>}
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