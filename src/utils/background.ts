import {LanguageType} from '../types'
import {STRINGS} from '../constants'
import rain_en from '../assets/video/rain_en.mp4'
import rain_ru from '../assets/video/rain_ru.mp4'
import {videos} from '../store/background'

export const setVideoTranslation = (language: LanguageType) => videos[STRINGS.RAIN].file = language === STRINGS.ENGLISH ? rain_en : rain_ru