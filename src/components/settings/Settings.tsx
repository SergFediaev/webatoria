import s from './Settings.module.css'
import {SettingSection} from './settingSection/SettingSection'
import {intervals, languages} from '../../store/settings'
import {SettingCheckbox} from './settingCheckbox/SettingCheckbox'
import {Button} from '../button/Button'
import {SettingSelect} from './settingSelect/SettingSelect'
import {useDispatch, useSelector} from 'react-redux'
import {selectBackground, selectSettings} from '../../store/selectors'
import {
    resetBackground,
    resetSettings,
    setAutoUpdateCards,
    setAutoUpdateCardsInterval,
    setBackgroundColor,
    setBackgroundOverlay,
    setBackgroundSound,
    setBackgroundVariant,
    setBackgroundVideo,
    setBackgroundWallpaper,
    setCustomCardsWarning,
    setDevMode,
    setLanguage,
    setLogRender,
    setMarkup,
    setNotificationSound,
} from '../../store/actions'
import {AutoUpdateCardsIntervalType, BackgroundVariantType, LanguageType} from '../../types'
import {EMOJIS, LINKS, STRINGS, TITLES} from '../../constants'
import {backgrounds, colors, videos, wallpapers} from '../../store/background'
import {PROJECT} from '../../constants/strings'

export const Settings = () => {
    //region Local state.
    const settings = useSelector(selectSettings)
    const background = useSelector(selectBackground)
    const dispatch = useDispatch()
    const isBackgroundColor = background.variant === STRINGS.COLOR
    const isBackgroundWallpaper = background.variant === STRINGS.WALLPAPER
    const isBackgroundVideo = background.variant === STRINGS.VIDEO
    //endregion

    //region Handlers.
    const handleNotificationSound = (enabled: boolean) => dispatch(setNotificationSound(enabled))

    const handleLanguage = (language: string) => dispatch(setLanguage(language as LanguageType))

    const handleAutoUpdateCards = (enabled: boolean) => dispatch(setAutoUpdateCards(enabled))

    const handleAutoUpdateCardsInterval = (interval: string) => dispatch(setAutoUpdateCardsInterval(interval as AutoUpdateCardsIntervalType))

    const handleCustomCardsWarning = (enabled: boolean) => dispatch(setCustomCardsWarning(enabled))

    const handleBackgroundVariant = (variant: string) => dispatch(setBackgroundVariant(variant as BackgroundVariantType))

    const handleBackgroundColor = (color: string) => dispatch(setBackgroundColor(color))

    const handleBackgroundWallpaper = (wallpaper: string) => dispatch(setBackgroundWallpaper(wallpaper))

    const handleBackgroundVideo = (video: string) => dispatch(setBackgroundVideo(video))

    const handleBackgroundOverlay = (enabled: boolean) => dispatch(setBackgroundOverlay(enabled))

    const handleBackgroundSound = (enabled: boolean) => dispatch(setBackgroundSound(enabled))

    const handleDevMode = (enabled: boolean) => dispatch(setDevMode(enabled))

    const handleLogRender = (enabled: boolean) => dispatch(setLogRender(enabled))

    const handleMarkup = (enabled: boolean) => dispatch(setMarkup(enabled))

    const reset = () => {
        dispatch(resetSettings())
        dispatch(resetBackground())
    }

    const clearSessionCache = () => {
        sessionStorage.clear()
        reset()
    }

    const clearLocalCache = () => {
        localStorage.clear()
        reset()
    }

    const clearAllCache = () => {
        sessionStorage.clear()
        localStorage.clear()
        reset()
    }
    //endregion

    return <div className={s.settings}>
        <SettingSection title={STRINGS.GENERAL}>
            <SettingCheckbox name={STRINGS.NOTIFICATION_SOUND}
                             checked={settings.notificationSound}
                             onChange={handleNotificationSound}/>
            <SettingSelect name={STRINGS.LANGUAGE}
                           selectedOption={settings.language}
                           options={languages}
                           setSelected={handleLanguage}/>
        </SettingSection>
        <SettingSection title={STRINGS.DASHBOARD}>
            <SettingCheckbox name={STRINGS.AUTO_UPDATE}
                             checked={settings.autoUpdateCards}
                             onChange={handleAutoUpdateCards}/>
            {settings.autoUpdateCards && <SettingSelect name={STRINGS.AUTO_UPDATE_INTERVAL}
                                                        selectedOption={settings.autoUpdateCardsInterval}
                                                        options={Object.values(intervals)} // ToDo: Refactor all Object.values().
                                                        setSelected={handleAutoUpdateCardsInterval}/>}
            <SettingCheckbox name={STRINGS.CARDS_WARNING}
                             checked={settings.customCardsWarning}
                             onChange={handleCustomCardsWarning}/>
        </SettingSection>
        <SettingSection title={STRINGS.BACKGROUND}>
            <SettingSelect name={STRINGS.BACKGROUND_TYPE}
                           selectedOption={background.variant}
                           options={backgrounds}
                           setSelected={handleBackgroundVariant}/>
            {isBackgroundColor && <SettingSelect name={STRINGS.BACKGROUND_COLOR}
                                                 selectedOption={background.color}
                                                 options={Object.values(colors)}
                                                 setSelected={handleBackgroundColor}/>}
            {isBackgroundWallpaper && <SettingSelect name={STRINGS.BACKGROUND_WALLPAPER}
                                                     selectedOption={background.wallpaper}
                                                     options={Object.values(wallpapers)}
                                                     setSelected={handleBackgroundWallpaper}/>}
            {isBackgroundVideo && <>
                <SettingSelect name={STRINGS.BACKGROUND_VIDEO}
                               selectedOption={background.video}
                               options={Object.values(videos)}
                               setSelected={handleBackgroundVideo}/>
                <SettingCheckbox name={STRINGS.BACKGROUND_SOUND}
                                 checked={background.sound}
                                 onChange={handleBackgroundSound}/>
            </>}
            {!isBackgroundColor && <SettingCheckbox name={STRINGS.BACKGROUND_OVERLAY}
                                                    checked={background.overlay}
                                                    onChange={handleBackgroundOverlay}/>}
        </SettingSection>
        <SettingSection title={STRINGS.ABOUT}>
            <p>{PROJECT.NAME} {PROJECT.DESCRIPTION}</p>
            <q>{PROJECT.SLOGAN}</q>
            <p>{STRINGS.VERSION}{PROJECT.VERSION}</p>
            <p>{STRINGS.BUILD}{PROJECT.BUILD}</p>
            <p>{STRINGS.GITHUB}<a href={LINKS.PROJECT_REPO_URL}>{LINKS.PROJECT_REPO_NAME}</a></p>
            <p>Made with <span className={s.love}
                               title={`${TITLES.LOVE} ${EMOJIS.LOVE}`}>{EMOJIS.HEART}</span> and <span
                className={s.soul}
                title={`${TITLES.SOUL} ${EMOJIS.SOUL}`}>{EMOJIS.FIRE}</span> in {PROJECT.COPYRIGHT}</p>
            <p>{STRINGS.DEDICATED}</p>
        </SettingSection>
        <SettingSection title={STRINGS.RESET}>
            <div className={s.buttons}>
                <Button name={STRINGS.CLEAR_SESSION_CACHE}
                        onClick={clearSessionCache}/>
                <Button name={STRINGS.CLEAR_LOCAL_CACHE}
                        onClick={clearLocalCache}/>
                <Button name={STRINGS.CLEAR_ALL_CACHE}
                        onClick={clearAllCache}/>
            </div>
            <Button name={STRINGS.RESET_SETTINGS}
                    onClick={reset}/>
        </SettingSection>
        <SettingSection title={STRINGS.DEVELOPER}>
            <SettingCheckbox name={STRINGS.DEVELOPER_MODE}
                             checked={settings.devMode}
                             onChange={handleDevMode}/>
            <SettingCheckbox name={STRINGS.LOG_RENDER}
                             checked={settings.logRender}
                             onChange={handleLogRender}/>
            <SettingCheckbox name={STRINGS.SHOW_MARKUP}
                             checked={settings.showMarkup}
                             onChange={handleMarkup}/>
        </SettingSection>
    </div>
}