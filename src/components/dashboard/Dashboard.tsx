import s from './Dashboard.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {Card} from '../card/Card'
import {log, logRender, sortCards} from '../../utils'
import {ERRORS, RENDERS, STRINGS} from '../../constants'
import {
    selectCards,
    selectSettingsAutoUpdateCards,
    selectSettingsAutoUpdateCardsInterval,
    selectSettingsFilter,
    selectSettingsReadingMode,
    selectSettingsSearchQuery,
    selectSettingsSort,
} from '../../store/selectors'
import {intervals, sortParams} from '../../store/settings'
import {useEffect} from 'react'
import {getCardsFromSpreadsheet} from '../../api'
import {addNotification} from '../../store/actions'

export const Dashboard = () => {
    logRender(RENDERS.DASHBOARD)
    const cards = useSelector(selectCards)
    const filter = useSelector(selectSettingsFilter)
    const sort = useSelector(selectSettingsSort)
    const readingMode = useSelector(selectSettingsReadingMode)
    const searchQuery = useSelector(selectSettingsSearchQuery).toLowerCase()
    const autoUpdateCards = useSelector(selectSettingsAutoUpdateCards)
    const autoUpdateCardsInterval = useSelector(selectSettingsAutoUpdateCardsInterval)
    const dispatch = useDispatch()

    useEffect(() => {
        if (autoUpdateCards) {
            const intervalId = setInterval(() => getCardsFromSpreadsheet()
                .then(cards => log(STRINGS.UPDATED, cards.length))
                .catch(reason => dispatch(addNotification(`${ERRORS.FETCHING_CARDS}${reason}`, true))), intervals[autoUpdateCardsInterval].time)

            return () => clearInterval(intervalId)
        }
    }, [autoUpdateCards, autoUpdateCardsInterval, dispatch])

    let filteredCards = cards
    if (filter === STRINGS.UNCATEGORIZED) filteredCards = cards.filter(card => card.tags.length === 0)
    else if (filter !== STRINGS.ALL) filteredCards = cards.filter(card => card.tags.includes(filter))

    const foundCards = searchQuery ? filteredCards.filter(card => card.title.toLowerCase().includes(searchQuery) ||
        card.text.toLowerCase().includes(searchQuery) ||
        card.tags.some(tag => tag.toLowerCase().includes(searchQuery)),
    ) : filteredCards

    const sortedCards = sortCards(foundCards, sortParams[sort].key, sortParams[sort].ascending)
    const cardElements = sortedCards.map(card => <Card key={card.id}
                                                       id={card.id}
                                                       title={card.title}
                                                       text={card.text}
                                                       tags={card.tags}
                                                       likes={card.likes}
                                                       dislikes={card.dislikes}
                                                       comments={card.comments}
                                                       favorite={card.favorite}
                                                       open={readingMode}/>)
    return <div className={s.dashboard}>
        <ul>{cardElements}</ul>
    </div>
}