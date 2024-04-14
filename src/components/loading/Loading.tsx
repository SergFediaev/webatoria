import React from 'react'
import s from './Loading.module.css'
import {EMOJIS} from '../../constants'
import {Overlay} from '../overlay/Overlay'

export const Loading = () => <div className={s.loading}>
    <Overlay/>
    <h3>L<span className={s.logo}>{EMOJIS.LOGO}</span>ading...</h3>
</div>