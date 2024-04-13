import s from './CardDetails.module.css'
import {Navigate, useNavigate, useParams} from 'react-router-dom'
import {SpoilerText} from '../spoilerText/SpoilerText'
import {ButtonIcon} from '../buttonIcon/ButtonIcon'
import {selectSettingsReadingMode} from '../../store/selectors'
import {useSelector} from 'react-redux'
import {StateType} from '../../store'
import {CardType} from '../../types'
import {logRender} from '../../utils'
import {EMOJIS, PATHS, RENDERS, TITLES} from '../../constants'

export const CardDetails = () => {
    const {id} = useParams()
    const card = useSelector<StateType, CardType | undefined>(state => state.cards.find(card => card.id === id))
    logRender(RENDERS.CARD_DETAILS, card?.title)
    const readingMode = useSelector(selectSettingsReadingMode)
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
        : <Navigate to={PATHS.ERROR_404}/>
}