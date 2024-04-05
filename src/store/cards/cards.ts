import {v1} from 'uuid'
import {DEFAULT_VALUES} from '../../constants'

type DataType = {
    title: string
    text: string
}

export type CardType = {
    id: string
    tags: string[]
    likes: number
    dislikes: number
} & DataType

const data: DataType[] = [
    {
        title: 'ReactJS',
        text: 'Библиотека для создания пользовательских интерфейсов. Не фреймворк, потому что не достаточно инструментов из коробки для полноценной разработки, например даже маршрутизацию надо отдельно устанавливать. С другой стороны плюс библиотеки в том, что её можно встроить в уже существующий проект и потихоньку переделывать его на реакт',
    },
    {
        title: 'ReactDOM, ReactNative, ReactVR',
        text: 'Дополнительные библиотеки, которые нужно установить в проект вместе с основной библиотекой React, чтобы разрабатывать под определенную платформу.',
    },
    {
        title: 'Декларативный подход реакта',
        text: 'Мы указываем реакту, что нужно сделать (например дёргаем setState), но не заботимся о том, как это реакт выполнит. Императивный подход - это наоборот про то, как делать.',
    },
    {
        title: 'Компонентный подход',
        text: 'Повторяющиеся элементы выносятся в компоненты и переиспользуются в разных местах.',
    },
    {
        title: 'Create-React-App',
        text: 'Утилита для генерации настроенного стартового реакт-проекта.',
    },
]

export const getCards = () => {
    const cards: CardType[] = []
    data.forEach((data) => {
        cards.push(createCard(data.title, data.text))
    })
    return cards
}

const createCard = (title: string, text: string, tags?: string[]) => {
    const card: CardType = {
        id: v1(),
        title,
        text,
        tags: tags || [] as string[],
        likes: DEFAULT_VALUES.LIKES,
        dislikes: DEFAULT_VALUES.DISLIKES,
    }
    return card
}