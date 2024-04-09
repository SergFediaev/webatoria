import {STRINGS} from '../../constants'

const log = (...args: any) => console.log(args.join(STRINGS.EMPTY))

export const logRender = (component: string, id?: string, logDetailLevel: number = 1) => log(component, id) // TODO: Log detail level.