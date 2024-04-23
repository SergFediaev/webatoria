import s from './SettingSection.module.css'
import {ButtonIcon} from '../../buttonIcon/ButtonIcon'
import {EMOJIS, TITLES} from '../../../constants'
import {ReactNode, useState} from 'react'

type SettingSectionPropsType = {
    title: string
    children: ReactNode
}

export const SettingSection = ({title, children}: SettingSectionPropsType) => {
    const [opened, setOpened] = useState(true)
    const toggleOpened = () => setOpened(!opened)

    return <div className={s.settingSection}>
        <header onClick={toggleOpened}
                title={opened ? TITLES.CLOSE : TITLES.OPEN}>
            <h3>{title}</h3>
            <ButtonIcon>{opened ? EMOJIS.UP : EMOJIS.DOWN}</ButtonIcon>
        </header>
        {opened && <main>{children}</main>}
    </div>
}