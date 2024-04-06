import s from './WallpaperBackground.module.css'
import {memo} from 'react'
import wallpaper1 from '../assets/images/wallpaper1.jpg'

type WallpaperBackgroundPropsType = {}

export const WallpaperBackground = memo(({...props}: WallpaperBackgroundPropsType) => <div
    className={s.wallpaperBackground} style={{backgroundImage: `url(${wallpaper1})`}}/>)