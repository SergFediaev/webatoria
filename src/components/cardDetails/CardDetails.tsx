import s from './CardDetails.module.css'
import {memo} from 'react'
import {useSelector} from 'react-redux'
import {StoreType} from '../../store/store'
import {CardType} from '../../store/cards/cardsTypes'
import {useParams} from 'react-router-dom'
import {Error404} from '../error404/Error404'
import {SpoilerText} from '../spoilerText/SpoilerText'

export const CardDetails = memo(() => {
    const {id} = useParams()
    const card = useSelector<StoreType, CardType | undefined>(state => state.cards.find(card => card.id === id))
    const readingMode = useSelector<StoreType, boolean>(state => state.settings.readingMode)

    return card
        ? <div className={s.cardDetails}>
            <div className={s.card}>
                <h3>{card.title}</h3>
                <p>{id}</p>
                <SpoilerText visible={readingMode}>{card.text}</SpoilerText>
            </div>
        </div>
        : <Error404/>
})