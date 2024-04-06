import React, {memo} from 'react'
import s from './App.module.css'
import {Header} from '../header/Header'
import {Navigate, Route, Routes} from 'react-router-dom'
import {PATHS} from '../../constants'
import {Dashboard} from '../dashboard/Dashboard'
import {CardDetails} from '../cardDetails/CardDetails'
import {Error404} from '../error404/Error404'
import {Background} from '../background/Background'

export const App = memo(() => <div className={s.app}>
    <Background/>
    <Header/>
    <Routes>
        <Route path={PATHS.ROOT}
               element={<Navigate to={PATHS.DASHBOARD}/>}/>
        <Route path={PATHS.DASHBOARD}
               element={<Dashboard/>}/>
        <Route path={`${PATHS.CARD}${PATHS.ID}`}
               element={<CardDetails/>}/>
        <Route path={PATHS.ALL}
               element={<Navigate to={PATHS.ERROR_404}/>}/>
        <Route path={PATHS.ERROR_404} element={<Error404/>}/>
    </Routes>
</div>)