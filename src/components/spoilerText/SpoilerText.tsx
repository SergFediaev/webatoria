import s from './SpoilerText.module.css'
import {memo, ReactNode, useEffect, useState} from 'react'
import {logRender} from '../../utils'
import {RENDERS, TITLES} from '../../constants'

type SpoilerTextPropsType = {
    children: ReactNode
    visible: boolean
}

export const SpoilerText = memo(({children, ...rest}: SpoilerTextPropsType) => {
    logRender(RENDERS.SPOILER_TEXT)
    const [visible, setVisible] = useState(rest.visible)
    useEffect(() => setVisible(rest.visible), [rest.visible])
    const setVisibleHandler = () => {
        if (!visible) setVisible(true)
    }

    return <div className={`${s.spoilerText} ${!visible && s.hide}`}
                onClick={setVisibleHandler}
                title={visible ? undefined : TITLES.SHOW}>
        {children}
    </div>
})