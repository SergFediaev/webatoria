import s from './Card.module.css'
import {EMOJIS, PATHS, STRINGS, TITLES} from '../../constants'
import {ButtonIcon} from '../buttonIcon/ButtonIcon'
import {memo, useEffect, useRef, useState} from 'react'
import autoAnimate from '@formkit/auto-animate'
import {useDispatch} from 'react-redux'
import {likeCard} from '../../store/cards/cardsActions'
import {useNavigate} from 'react-router-dom'

type CardPropsType = {
    id: string
    title: string
    text: string
    tags: string[]
    likes: number
    dislikes: number
    comments: string[]
    favorite: boolean
    open?: boolean
}

export const Card = memo(({id, title, text, tags, likes, dislikes, comments, favorite, ...rest}: CardPropsType) => {
    //region Local state.
    const [open, setOpen] = useState<boolean>(rest.open || true)
    const parent = useRef(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        parent.current && autoAnimate(parent.current)
    }, [parent])
    //endregion

    //region Handlers.
    const like = () => dispatch(likeCard(id))
    const copy = () => navigator.clipboard.writeText(`${title}\n\n${text}`)
    const view = () => navigate(`${PATHS.CARD}/${id}`)
    const stub = () => {}
    //endregion

    return <li className={s.card} ref={parent}>
        <h3>{title}</h3>
        <p>{STRINGS.TAGS}: {tags.length > 0 ? tags.join(', ') : STRINGS.UNCATEGORIZED}</p>
        {open && <main>
            <p>{text}</p>
        </main>}
        <div className={s.menu}>
            <ButtonIcon onClick={like}
                        title={TITLES.LIKE}>{EMOJIS.LIKE} {likes}</ButtonIcon>
            <ButtonIcon onClick={stub}
                        title={TITLES.DISLIKE}>{EMOJIS.DISLIKE} {dislikes}</ButtonIcon>
            <ButtonIcon onClick={stub}
                        title={TITLES.COMMENTS}>{EMOJIS.COMMENTS} {comments.length}</ButtonIcon>
            <ButtonIcon onClick={stub}
                        title={TITLES.FAVORITE}>{EMOJIS.FAVORITE}</ButtonIcon>
            <ButtonIcon onClick={view}
                        title={TITLES.VIEW}>{EMOJIS.VIEW}</ButtonIcon>
            <ButtonIcon onClick={copy}
                        title={TITLES.COPY}>{EMOJIS.COPY}</ButtonIcon>
            <ButtonIcon onClick={() => setOpen(!open)}
                        title={open
                            ? TITLES.CLOSE
                            : TITLES.OPEN}>{open
                ? EMOJIS.CLOSE
                : EMOJIS.OPEN}</ButtonIcon>
        </div>
    </li>
})