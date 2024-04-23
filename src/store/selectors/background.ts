import {StateType} from '../index'

export const selectBackground = (state: StateType) => state.background

export const selectBackgroundVariant = (state: StateType) => state.background.variant

export const selectBackgroundColor = (state: StateType) => state.background.color

export const selectBackgroundWallpaper = (state: StateType) => state.background.wallpaper

export const selectBackgroundVideo = (state: StateType) => state.background.video

export const selectBackgroundSound = (state: StateType) => state.background.sound

export const selectBackgroundOverlay = (state: StateType) => state.background.overlay