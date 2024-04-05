import {likeCard} from './cardsActions'

export type DataType = {
    title: string
    text: string
    tags?: string[]
}

export type CardType = {
    id: string
    tags: string[]
    likes: number
    dislikes: number
    comments: string[]
    favorite: boolean
} & DataType

export type CardActionsType = ReturnType<typeof likeCard>