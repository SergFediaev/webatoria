export const STRINGS = {
    EMPTY: '',
    TAGS: 'Tags',
    ALL: 'ALL',
    UNCATEGORIZED: 'Uncategorized',
    REACT: 'React',
    JAVASCRIPT: 'JavaScript',
    HTML: 'HTML',
    CSS: 'CSS',
} as const

export const EMOJIS = {
    LOGO: '⚛',
    HOME: '🏠',
    READ: '👁️',
    TRAINING: '‍🎓',
    ADD: '📝',
    SETTINGS: '⚙️',
    LIKE: '👍',
    DISLIKE: '👎',
    COMMENTS: '💬',
    FAVORITE: '🧡',
    UNFAVORITE: '💔',
    VIEW: '👀',
    COPY: '📋',
    CLOSE: '🔼',
    OPEN: '🔽',
    UP: '▲',
    DOWN: '▼',
    STOP: '🧱',
} as const

export const TITLES = {
    GO_HOME: 'Go home',
    READ: 'Reading mode',
    TRAINING: 'Training mode',
    ADD: 'Create new card',
    SETTINGS: 'Open settings',
    LIKE: 'Like',
    DISLIKE: 'Dislike',
    COMMENTS: 'Comments',
    FAVORITE: 'Add to favorites',
    UNFAVORITE: 'Remove from favorites',
    VIEW: 'View full',
    COPY: 'Copy to clipboard',
    CLOSE: 'Close',
    OPEN: 'Open',
    SHOW: 'Show',
} as const

export const DEFAULT_VALUES = {
    LIKES: 0,
    DISLIKES: 0,
} as const

export const ACTION_TYPES = {
    SET_READING_MODE: 'SET_READING_MODE',
    CHANGE_FILTER: 'CHANGE_FILTER',
    LIKE_CARD: 'LIKE_CARD',
} as const

export const BUTTONS = {
    ARROW_UP: 'ArrowUp',
    ARROW_DOWN: 'ArrowDown',
    ENTER: 'Enter',
    ESCAPE: 'Escape',
} as const

export const KEYS = {
    SETTINGS: 'SETTINGS',
} as const

export const PATHS = {
    ROOT: '/',
    ALL: '/*',
    ERROR_404: '/error404',
    DASHBOARD: '/dashboard',
    CARD: '/card',
    ID: '/:id',
} as const