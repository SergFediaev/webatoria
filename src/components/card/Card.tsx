import s from './Card.module.css'
import {EMOJIS, TITLES} from '../../constants'
import {ButtonIcon} from '../buttonIcon/ButtonIcon'
import {memo, useEffect, useRef, useState} from 'react'
import autoAnimate from '@formkit/auto-animate'
import {useDispatch} from 'react-redux'
import {likeCard} from '../../store/cards/cardsActions'

type CardPropsType = {
    id: string
    title: string
    text: string
    likes: number
    dislikes: number
    comments: string[]
    favorite: boolean
    open?: boolean
}

export const Card = memo(({id, title, text, likes, dislikes, comments, favorite, ...rest}: CardPropsType) => {
    const [open, setOpen] = useState<boolean>(rest.open || true)
    const parent = useRef(null)

    useEffect(() => {
        parent.current && autoAnimate(parent.current)
    }, [parent])

    const dispatch = useDispatch()

    const like = () => dispatch(likeCard(id))

    return <li className={s.card} ref={parent}>
        <h3>{title}</h3>
        {open && <main>
            <p>{text}</p>
        </main>}
        <div className={s.menu}>
            <ButtonIcon onClick={like}
                        title={TITLES.LIKE}>{EMOJIS.LIKE} {likes}</ButtonIcon>
            <ButtonIcon onClick={() => {
            }}
                        title={TITLES.DISLIKE}>{EMOJIS.DISLIKE} {dislikes}</ButtonIcon>
            <ButtonIcon onClick={() => {
            }}
                        title={TITLES.COMMENTS}>{EMOJIS.COMMENTS} {comments.length}</ButtonIcon>
            <ButtonIcon onClick={() => {
            }}
                        title={TITLES.FAVORITE}>{EMOJIS.FAVORITE}</ButtonIcon>
            <ButtonIcon onClick={() => {
            }}
                        title={TITLES.VIEW}>{EMOJIS.VIEW}</ButtonIcon>
            <ButtonIcon onClick={() => {
            }}
                        title={TITLES.COPY}>{EMOJIS.COPY}</ButtonIcon>
            <ButtonIcon onClick={() => setOpen(!open)}
                        title={open ? TITLES.CLOSE : TITLES.OPEN}>{open ? EMOJIS.CLOSE : EMOJIS.OPEN}</ButtonIcon>
        </div>
    </li>
})