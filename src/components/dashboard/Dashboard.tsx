import s from './Dashboard.module.css'
import {useSelector} from 'react-redux'
import {Card} from '../card/Card'
import {logRender, sortCards} from '../../utils'
import {LINKS, RENDERS, STRINGS} from '../../constants'
import {
    selectCards,
    selectSettingsFilter,
    selectSettingsReadingMode,
    selectSettingsSearchQuery,
    selectSettingsSort,
} from '../../store/selectors'
import {sortParams} from '../../store/settings'

export const Dashboard = () => {
    logRender(RENDERS.DASHBOARD)
    const cards = useSelector(selectCards)
    const filter = useSelector(selectSettingsFilter)
    const sort = useSelector(selectSettingsSort)
    const readingMode = useSelector(selectSettingsReadingMode)
    const searchQuery = useSelector(selectSettingsSearchQuery).toLowerCase()

    let filteredCards = cards
    if (filter === STRINGS.UNCATEGORIZED) filteredCards = cards.filter(card => card.tags.length === 0)
    else if (filter !== STRINGS.ALL) filteredCards = cards.filter(card => card.tags.includes(filter))

    let foundCards = filteredCards
    if (searchQuery) foundCards = filteredCards.filter(card => card.title.toLowerCase().includes(searchQuery) ||
        card.text.toLowerCase().includes(searchQuery) ||
        card.tags.some(tag => tag.toLowerCase().includes(searchQuery)),
    )

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
    const showCards = cardElements.length > 0

    // TODO: 2 components.
    return showCards
        ? <div className={s.dashboard}>
            <ul>{cardElements}</ul>
        </div>
        : <div className={s.project}>
            <a href={LINKS.PROJECT_REPO_URL}>{LINKS.PROJECT_REPO_NAME}</a>
        </div>
}