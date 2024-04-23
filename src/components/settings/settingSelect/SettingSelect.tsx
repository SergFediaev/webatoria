import s from './SettingSelect.module.css'
import {OptionType, Select} from '../../select/Select'

type SettingSelectPropsType = {
    name: string
    selectedOption: string
    options: OptionType[]
    setSelected: (option: string) => void
}

export const SettingSelect = ({name, selectedOption, options, setSelected}: SettingSelectPropsType) => <div
    className={s.settingSelect}>
    <span className={s.name}>{name}</span>
    <Select selectedOption={selectedOption}
            options={options}
            setSelected={setSelected}/>
</div>