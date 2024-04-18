import React, {useEffect, useState} from 'react'
import s from './App.module.css'
import {Header} from '../header/Header'
import {Navigate, Route, Routes} from 'react-router-dom'
import {Dashboard} from '../dashboard/Dashboard'
import {CardDetails} from '../cardDetails/CardDetails'
import {Error404} from '../error404/Error404'
import {Background} from '../background/Background'
import {CreateCard} from '../createCard/CreateCard'
import {ERRORS, PATHS, RENDERS, STRINGS, TIME, TYPES} from '../../constants'
import {useDispatch} from 'react-redux'
import {addNotification, playSound, setCards} from '../../store/actions'
import {Loading} from '../loading/Loading'
import {getCachedCards} from '../../api'
import {logError, logRender} from '../../utils'
import {Notifications} from '../notifications/Notifications'
import {SoundPlayer} from '../soundPlayer/SoundPlayer'
import {SOUNDS} from '../../store/sound'

export const App = () => {
    logRender(RENDERS.APP)

    //region Local state.
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    const [openNotifications, setOpenNotifications] = useState(false)

    useEffect(() => {
        const loadingTimeoutId = setTimeout(handleLoading, TIME.LOADING_TIMEOUT)

        const getCards = async () => {
            try {
                const cards = await getCachedCards()
                dispatch(setCards(cards))
                // dispatch(addNotification(`${STRINGS.LOADED}${cards.length}`)) TODO: Refactor.
            } catch (error) {
                logError(ERRORS.FETCHING_CARDS, error)
                dispatch(addNotification(`${ERRORS.FETCHING_CARDS}${error}`, true))
                dispatch(playSound(SOUNDS.NOTIFICATION))
                // TODO: Default cards.
            }
        }

        getCards().finally(handleLoading)
        return () => clearTimeout(loadingTimeoutId)
    }, [dispatch])

    useEffect(() => {
        const handleOnline = () => {
            dispatch(addNotification(STRINGS.ONLINE))
            dispatch(playSound(SOUNDS.NOTIFICATION))
        }

        const handleOffline = () => {
            dispatch(addNotification(ERRORS.OFFLINE, true))
            dispatch(playSound(SOUNDS.NOTIFICATION))
        }

        window.addEventListener(TYPES.ONLINE, handleOnline)
        window.addEventListener(TYPES.OFFLINE, handleOffline)

        return () => {
            window.removeEventListener(TYPES.ONLINE, handleOnline)
            window.removeEventListener(TYPES.OFFLINE, handleOffline)
        }
    }, [dispatch])
    //endregion

    //region Handlers.
    const handleToggleNotifications = () => setOpenNotifications(!openNotifications)
    const handleCloseNotifications = () => setOpenNotifications(false)
    const handleLoading = () => setLoading(false)
    //endregion

    return <div className={s.app}>
        <Background/>
        <Header toggleNotifications={handleToggleNotifications}/>
        <Routes>
            <Route path={PATHS.ROOT}
                   element={<Navigate to={PATHS.DASHBOARD}/>}/>
            <Route path={PATHS.DASHBOARD}
                   element={<Dashboard/>}/>
            <Route path={`${PATHS.CARD}${PATHS.ID}`}
                   element={<CardDetails/>}/>
            <Route path={PATHS.CREATE_CARD}
                   element={<CreateCard/>}/>
            <Route path={PATHS.ALL}
                   element={<Navigate to={PATHS.ERROR_404}/>}/>
            <Route path={PATHS.ERROR_404} element={<Error404/>}/>
        </Routes>
        {openNotifications && <Notifications close={handleCloseNotifications}/>}
        {loading && <Loading/>}
        <SoundPlayer/>
    </div>
}