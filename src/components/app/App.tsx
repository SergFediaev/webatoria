import React, {memo} from 'react'
import s from './App.module.css'
import {Dashboard} from '../dashboard/Dashboard'

export const App = memo(() => <div className={s.app}>
    <Dashboard/>
</div>)