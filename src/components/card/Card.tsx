import s from './Card.module.css'

type CardPropsType = {
    title: string
    text: string
    open?: boolean
}

export const Card = ({title, text, open = true}: CardPropsType) => {

    return <li className={s.card}>
        <h3>{title}</h3>
        <p>{text}</p>
    </li>
}