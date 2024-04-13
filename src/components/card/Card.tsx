import s from './Card.module.css'
import {ButtonIcon} from '../buttonIcon/ButtonIcon'
import {memo, useCallback, useEffect, useRef, useState} from 'react'
import autoAnimate from '@formkit/auto-animate'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {logRender} from '../../utils'
import {EMOJIS, PATHS, RENDERS, STRINGS, TITLES} from '../../constants'
import {dislikeCard, likeCard} from '../../store/actions'

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

export const Card = memo(({
                              id,
                              title,
                              text,
                              tags,
                              likes,
                              dislikes,
                              comments,
                              favorite,
                              ...rest
                          }: CardPropsType) => {
    logRender(RENDERS.CARD, title)

    //region Local state.
    const [open, setOpen] = useState<boolean>(rest.open || true)
    const parent = useRef(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => setOpen(rest.open || false), [rest.open])
    useEffect(() => {
        parent.current && autoAnimate(parent.current)
    }, [parent])
    //endregion

    //region Handlers.
    const like = useCallback(() => dispatch(likeCard(id)), [dispatch, id])
    const dislike = useCallback(() => dispatch(dislikeCard(id)), [dispatch, id])
    const copy = useCallback(() => navigator.clipboard.writeText(`${title}\n\n${text}`), [title, text])
    const view = useCallback(() => navigate(`${PATHS.CARD}/${id}`), [navigate, id])
    const toggleOpen = useCallback(() => setOpen(!open), [open])
    //endregion

    return <li className={s.card} ref={parent}>
        <h3>{title}</h3>
        <p>{STRINGS.TAGS}: {tags.length > 0 ? tags.join(STRINGS.COMMA_SPACE_DELIMITER) : STRINGS.UNCATEGORIZED}</p>
        {open && <main>
            <p>{text}</p>
        </main>}
        <div className={s.menu}>
            <ButtonIcon onClick={like}
                        title={TITLES.LIKE}>{EMOJIS.LIKE}{likes}</ButtonIcon>
            <ButtonIcon onClick={dislike}
                        title={TITLES.DISLIKE}>{EMOJIS.DISLIKE}{dislikes}</ButtonIcon>
            <ButtonIcon title={TITLES.COMMENTS}>{EMOJIS.COMMENTS}{comments.length}</ButtonIcon>
            <ButtonIcon title={TITLES.FAVORITE}>{EMOJIS.FAVORITE}</ButtonIcon>
            <ButtonIcon onClick={view}
                        title={TITLES.VIEW}>{EMOJIS.VIEW}</ButtonIcon>
            <ButtonIcon onClick={copy}
                        title={TITLES.COPY}>{EMOJIS.COPY}</ButtonIcon>
            <ButtonIcon onClick={toggleOpen}
                        title={open
                            ? TITLES.CLOSE
                            : TITLES.OPEN}>{open
                ? EMOJIS.CLOSE
                : EMOJIS.OPEN}</ButtonIcon>
        </div>
    </li>
})