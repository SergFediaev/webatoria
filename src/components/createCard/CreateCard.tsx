import s from './CreateCard.module.css'
import {Button} from '../button/Button'
import {ElementRef, FormEvent, useRef, useState} from 'react'
import emailjs from '@emailjs/browser'
import {useNavigate} from 'react-router-dom'
import {ButtonIcon} from '../buttonIcon/ButtonIcon'
import {APIS, EMOJIS, KEYS, PATHS, RENDERS, STRINGS, TITLES, TYPES} from '../../constants'
import {getFormElementValue, logRender} from '../../utils'
import {SpreadsheetCardType} from '../../types'
import {postCardToSpreadsheet} from '../../api'

export const CreateCard = () => {
    logRender(RENDERS.CREATE_CARD)

    //region Local state.
    const [creating, setCreating] = useState(true)
    const navigate = useNavigate()
    const form = useRef<ElementRef<typeof TYPES.FORM>>(null)
    //endregion

    //region Handlers.
    const goDashboard = () => navigate(PATHS.DASHBOARD)
    const createMore = () => setCreating(true)
    const create = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (!form.current) return

        const {elements} = form.current
        const card: SpreadsheetCardType = {
            userName: getFormElementValue(elements.namedItem(KEYS.USER_NAME)),
            userEmail: getFormElementValue(elements.namedItem(KEYS.USER_EMAIL)),
            title: getFormElementValue(elements.namedItem(KEYS.CARD_TITLE)),
            text: getFormElementValue(elements.namedItem(KEYS.CARD_CONTENT)),
            tags: getFormElementValue(elements.namedItem(KEYS.CARD_CATEGORY)),
        }
        postCardToSpreadsheet(card) // TODO: Promise then/catch/finally & loading.

        emailjs.sendForm(APIS.EMAIL_SERVICE_ID, APIS.EMAIL_TEMPLATE_ID, form.current, APIS.EMAIL_PUBLIC_KEY)
            .then(result => console.log(result.text), error => console.log(error.text)) // TODO: Add settings errors.

        event.currentTarget.reset()
        setCreating(!creating)
    }
    //endregion

    return <div className={s.createCard}>
        <div className={s.card}>
            {creating
                ? <>
                    <div className={s.titleContainer}>
                        <h3>{STRINGS.CREATE_CARD}</h3>
                        <ButtonIcon onClick={goDashboard}
                                    title={TITLES.CLOSE_AND_RETURN}>{EMOJIS.CANCEL}</ButtonIcon>
                    </div>
                    <form className={s.form}
                          ref={form}
                          onSubmit={create}>
                        <input type={TYPES.TEXT}
                               placeholder={`${STRINGS.NAME} ${STRINGS.OPTIONAL}`}
                               name={KEYS.USER_NAME}/>
                        <input type={TYPES.TEXT}
                               placeholder={`${STRINGS.EMAIL} ${STRINGS.OPTIONAL}`}
                               name={KEYS.USER_EMAIL}/>
                        <input type={TYPES.TEXT}
                               placeholder={STRINGS.CARD_TITLE}
                               name={KEYS.CARD_TITLE}
                               required/>
                        <input type={TYPES.TEXT}
                               placeholder={`${STRINGS.CARD_CATEGORY} ${STRINGS.OPTIONAL}`}
                               name={KEYS.CARD_CATEGORY}/>
                        <textarea placeholder={STRINGS.CARD_CONTENT}
                                  name={KEYS.CARD_CONTENT}
                                  required/>
                        <Button type={TYPES.SUBMIT}>{STRINGS.CREATE}</Button>
                    </form>
                </>
                : <>
                    <h3>{STRINGS.CARD_CREATED}</h3>
                    <p>{STRINGS.CARD_SENT}</p>
                    <div className={s.buttonsContainer}>
                        <Button onClick={createMore}>{STRINGS.CREATE_MORE}</Button>
                        <Button onClick={goDashboard}>{STRINGS.TO_DASHBOARD}</Button>
                    </div>
                </>}
        </div>
    </div>
}