import s from './Dashboard.module.css'
import {useSelector} from 'react-redux'
import {StoreType} from '../../store/store'
import {CardType} from '../../store/cards/cards'
import {Card} from '../card/Card'

type Props = {}

export const Dashboard = (props: Props) => {
    const cards = useSelector<StoreType, CardType[]>(state => state.cards)

    const cardElements = cards.map(card => <Card key={card.id} title={card.title} text={card.text}/>)

    return <div className={s.dashboard}>
        <ul>{cardElements}</ul>
    </div>
}