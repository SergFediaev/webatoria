import {memo} from 'react'
import s from './Header.module.css'
import {EMOJIS, TITLES} from '../../constants'
import {ButtonIcon} from '../buttonIcon/ButtonIcon'
import {Select} from '../select/Select'
import {cardOptions} from '../../store/cards/cards'
import {useDispatch, useSelector} from 'react-redux'
import {StoreType} from '../../store/store'
import {FilterType, SettingsType} from '../../store/settings/settingsTypes'
import {changeFilter, setReadingMode} from '../../store/settings/settingsActions'

export const Header = memo(() => {
    const settings = useSelector<StoreType, SettingsType>(state => state.settings)
    const dispatch = useDispatch()

    const changeFilterHandler = (filter: FilterType) => dispatch(changeFilter(filter))
    const setReadingModeHandler = () => dispatch(setReadingMode(!settings.readingMode))

    return <header className={s.header}>
        <h1>Webat<span className={s.logo}>{EMOJIS.LOGO}</span>ria</h1>
        <nav>
            <Select selectedOption={settings.filter}
                    options={cardOptions}
                    setSelected={option => changeFilterHandler(option as FilterType)}/>
            <ButtonIcon onClick={setReadingModeHandler}
                        title={settings.readingMode ? TITLES.TRAINING : TITLES.READ}>{settings.readingMode ? EMOJIS.TRAINING : EMOJIS.READ}</ButtonIcon>
            <ButtonIcon onClick={() => {}}
                        title={TITLES.ADD}>{EMOJIS.ADD}</ButtonIcon>
            <ButtonIcon onClick={() => {}}
                        title={TITLES.SETTINGS}>{EMOJIS.SETTINGS}</ButtonIcon>
        </nav>
    </header>
})