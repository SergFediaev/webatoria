import React, {ChangeEvent} from 'react'
import s from './Search.module.css'
import {ButtonIcon} from '../buttonIcon/ButtonIcon'
import {useDispatch, useSelector} from 'react-redux'
import {searchCard} from '../../store/actions'
import {selectSettingsSearchQuery} from '../../store/selectors'
import {EMOJIS, STRINGS, TITLES, TYPES} from '../../constants'

export const Search = () => {
    const dispatch = useDispatch()
    const query = useSelector(selectSettingsSearchQuery)
    const showClearButton = query.length > 0

    const onChange = (event: ChangeEvent<HTMLInputElement>) => dispatch(searchCard(event.currentTarget.value))
    const onClick = () => dispatch(searchCard(STRINGS.EMPTY))

    return <div className={s.search}>
        <ButtonIcon>{EMOJIS.SEARCH}</ButtonIcon>
        <input type={TYPES.TEXT}
               value={query}
               placeholder={STRINGS.CARD_SEARCH}
               onChange={onChange}/>
        {showClearButton && <ButtonIcon onClick={onClick}
                                        title={TITLES.CLEAR_SEARCH}>{EMOJIS.CANCEL}</ButtonIcon>}
    </div>
}