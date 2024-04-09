import s from './Dashboard.module.css'
import {useSelector} from 'react-redux'
import {StoreType} from '../../store/store'
import {Card} from '../card/Card'
import {memo} from 'react'
import {SettingsType} from '../../store/settings/settingsTypes'
import {LINKS, RENDERS, STRINGS} from '../../constants'
import {CardType} from '../../store/cards/cardsTypes'
import {logRender} from '../../store/settings/settingsHelpers'

export const Dashboard = memo(() => {
    logRender(RENDERS.DASHBOARD)
    const cards = useSelector<StoreType, CardType[]>(state => state.cards)
    const settings = useSelector<StoreType, SettingsType>(state => state.settings)

    let filteredCards = cards
    if (settings.filter === STRINGS.UNCATEGORIZED) filteredCards = cards.filter(card => card.tags.length === 0)
    else if (settings.filter !== STRINGS.ALL) filteredCards = cards.filter(card => card.tags.includes(settings.filter))

    const cardElements = filteredCards.map(card => <Card key={card.id}
                                                         id={card.id}
                                                         title={card.title}
                                                         text={card.text}
                                                         tags={card.tags}
                                                         likes={card.likes}
                                                         dislikes={card.dislikes}
                                                         comments={card.comments}
                                                         favorite={card.favorite}
                                                         open={settings.readingMode}/>)
    return cardElements.length > 0
        ? <div className={s.dashboard}>
            <ul>{cardElements}</ul>
        </div>
        : <div className={s.project}>
            <a href={LINKS.PROJECT_REPO_URL}>{LINKS.PROJECT_REPO_NAME}</a>
        </div>
})