import React, {memo} from 'react'
import s from './App.module.css'
import {Dashboard} from '../dashboard/Dashboard'
import {Header} from '../header/Header'

export const App = memo(() => <div className={s.app}>
    <Header/>
    <Dashboard/>
</div>)