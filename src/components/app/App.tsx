import React from 'react'
import s from './App.module.css'
import {Dashboard} from '../dashboard/Dashboard'

export const App = () => {

    return <div className={s.App}>
        <Dashboard/>
    </div>
}