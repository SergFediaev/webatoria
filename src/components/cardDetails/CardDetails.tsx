import s from './CardDetails.module.css'
import {memo} from 'react'
import {useSelector} from 'react-redux'
import {StoreType} from '../../store/store'
import {CardType} from '../../store/cards/cardsTypes'
import {useNavigate, useParams} from 'react-router-dom'
import {Error404} from '../error404/Error404'
import {SpoilerText} from '../spoilerText/SpoilerText'
import {ButtonIcon} from '../buttonIcon/ButtonIcon'
import {EMOJIS, PATHS, TITLES} from '../../constants'

export const CardDetails = memo(() => {
    const {id} = useParams()
    const card = useSelector<StoreType, CardType | undefined>(state => state.cards.find(card => card.id === id))
    const readingMode = useSelector<StoreType, boolean>(state => state.settings.readingMode)
    const navigate = useNavigate()
    const goDashboard = () => navigate(PATHS.DASHBOARD)

    return card
        ? <div className={s.cardDetails}>
            <div className={s.card}>
                <div className={s.titleContainer}>
                    <h3>{card.title}</h3>
                    <ButtonIcon onClick={goDashboard}
                                title={TITLES.CLOSE_AND_RETURN}>{EMOJIS.CANCEL}</ButtonIcon>
                </div>
                <SpoilerText visible={readingMode}>{card.text}</SpoilerText>
            </div>
        </div>
        : <Error404/>
})