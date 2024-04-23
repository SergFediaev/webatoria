import s from './SettingCheckbox.module.css'
import {TYPES} from '../../../constants'

type SettingCheckboxPropsType = {
    name: string
    checked: boolean
    onChange: (checked: boolean) => void
}

export const SettingCheckbox = ({name, checked, onChange}: SettingCheckboxPropsType) => <div
    className={s.settingCheckbox}>
    <span>{name}</span>
    <input type={TYPES.CHECKBOX}
           checked={checked}
           onChange={event => onChange(event.currentTarget.checked)}/>
</div>