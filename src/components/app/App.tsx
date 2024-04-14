import React, {useEffect, useState} from 'react'
import s from './App.module.css'
import {Header} from '../header/Header'
import {Navigate, Route, Routes} from 'react-router-dom'
import {Dashboard} from '../dashboard/Dashboard'
import {CardDetails} from '../cardDetails/CardDetails'
import {Error404} from '../error404/Error404'
import {Background} from '../background/Background'
import {CreateCard} from '../createCard/CreateCard'
import {ERRORS, PATHS, RENDERS, TIME} from '../../constants'
import {useDispatch} from 'react-redux'
import {setCards} from '../../store/actions'
import {Loading} from '../loading/Loading'
import {getCachedCards} from '../../api'
import {logError, logRender} from '../../utils'

export const App = () => {
    logRender(RENDERS.APP)

    //region Local state.
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    const handleLoading = () => setLoading(false)
    useEffect(() => {
        const loadingTimeoutId = setTimeout(handleLoading, TIME.LOADING_TIMEOUT)

        const getCards = async () => {
            try {
                const cards = await getCachedCards()
                dispatch(setCards(cards))
            } catch (error) {
                logError(ERRORS.FETCHING_CARDS, error)
                // TODO: Default cards.
            }
        }

        getCards().finally(handleLoading)
        return () => clearTimeout(loadingTimeoutId)
    }, [dispatch])
    //endregion

    return <div className={s.app}>
        <Background/>
        <Header/>
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
        {loading && <Loading/>}
    </div>
}