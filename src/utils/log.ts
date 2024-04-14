import {STRINGS} from '../constants'

export const log = (...args: any) => console.log(args.join(STRINGS.EMPTY)) // TODO: Don't stringify objects!

export const logRender = (component: string, id?: string, logDetailLevel: number = 1) => log(component, id) // TODO: Log detail level.

export const logError = (...args: any) => console.error(args.join(STRINGS.EMPTY)) // TODO: Same here.