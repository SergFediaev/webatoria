import s from './Dashboard.module.css'
import {useSelector} from 'react-redux'
import {Card} from '../card/Card'
import {selectCards, selectSettingsFilter, selectSettingsReadingMode} from '../../store/selectors'
import {logRender} from '../../utils'
import {LINKS, RENDERS, STRINGS} from '../../constants'

export const Dashboard = () => {
    logRender(RENDERS.DASHBOARD)
    const cards = useSelector(selectCards)
    const filter = useSelector(selectSettingsFilter)
    const readingMode = useSelector(selectSettingsReadingMode)

    let filteredCards = cards
    if (filter === STRINGS.UNCATEGORIZED) filteredCards = cards.filter(card => card.tags.length === 0)
    else if (filter !== STRINGS.ALL) filteredCards = cards.filter(card => card.tags.includes(filter))

    const cardElements = filteredCards.map(card => <Card key={card.id}
                                                         id={card.id}
                                                         title={card.title}
                                                         text={card.text}
                                                         tags={card.tags}
                                                         likes={card.likes}
                                                         dislikes={card.dislikes}
                                                         comments={card.comments}
                                                         favorite={card.favorite}
                                                         open={readingMode}/>)
    return cardElements.length > 0
        ? <div className={s.dashboard}>
            <ul>{cardElements}</ul>
        </div>
        : <div className={s.project}>
            <a href={LINKS.PROJECT_REPO_URL}>{LINKS.PROJECT_REPO_NAME}</a>
        </div>
}