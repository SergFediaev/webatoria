import s from './Error404.module.css'
import {memo} from 'react'

type Error404PropsType = {}

export const Error404 = memo(({...props}: Error404PropsType) => <div className={s.error404}>404</div>)