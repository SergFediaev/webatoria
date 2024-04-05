export const STRINGS = {} as const

export const EMOJIS = {
    LIKE: '👍',
    DISLIKE: '👎',
    COMMENTS: '💬',
    FAVORITE: '🧡',
    UNFAVORITE: '💔',
    VIEW: '👀',
    COPY: '📋',
    CLOSE: '🔼',
    OPEN: '🔽',
} as const

export const TITLES = {
    LIKE: 'Like',
    DISLIKE: 'Dislike',
    COMMENTS: 'Comments',
    FAVORITE: 'Add to favorites',
    UNFAVORITE: 'Remove from favorites',
    VIEW: 'View full',
    COPY: 'Copy to clipboard',
    CLOSE: 'Close',
    OPEN: 'Open',
} as const

export const DEFAULT_VALUES = {
    LIKES: 0,
    DISLIKES: 0,
} as const

export const ACTION_TYPES = {
    LIKE_CARD: 'LIKE_CARD',
} as const