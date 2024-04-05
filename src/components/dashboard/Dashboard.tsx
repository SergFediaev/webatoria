import s from './Dashboard.module.css'
import {useSelector} from 'react-redux'
import {StoreType} from '../../store/store'
import {CardType} from '../../store/cards/cards'
import {Card} from '../card/Card'
import {memo} from 'react'

export const Dashboard = memo(() => {
    const cards = useSelector<StoreType, CardType[]>(state => state.cards)

    const cardElements = cards.map(card => <Card key={card.id}
                                                 id={card.id}
                                                 title={card.title}
                                                 text={card.text}
                                                 likes={card.likes}
                                                 dislikes={card.dislikes}
                                                 comments={card.comments}
                                                 favorite={card.favorite}/>)

    return <div className={s.dashboard}>
        <ul>{cardElements}</ul>
    </div>
})