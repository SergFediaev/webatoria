import {v1} from 'uuid'
import {DEFAULT_VALUES, STRINGS} from '../../constants'
import {OptionType} from '../../components/select/Select'
import {CardType, DataType} from './cardsTypes'
import {getRandomInteger} from '../mock'

const data: DataType[] = [
    {
        title: 'ReactJS',
        text: 'Библиотека для создания пользовательских интерфейсов. Не фреймворк, потому что не достаточно инструментов из коробки для полноценной разработки, например даже маршрутизацию надо отдельно устанавливать. С другой стороны плюс библиотеки в том, что её можно встроить в уже существующий проект и потихоньку переделывать его на реакт',
        tags: [STRINGS.REACT],
    },
    {
        title: 'ReactDOM, ReactNative, ReactVR',
        text: 'Дополнительные библиотеки, которые нужно установить в проект вместе с основной библиотекой React, чтобы разрабатывать под определенную платформу.',
        tags: [STRINGS.REACT, STRINGS.JAVASCRIPT],
    },
    {
        title: 'Декларативный подход реакта',
        text: 'Мы указываем реакту, что нужно сделать (например дёргаем setState), но не заботимся о том, как это реакт выполнит. Императивный подход - это наоборот про то, как делать.',
        tags: [STRINGS.HTML],
    },
    {
        title: 'Компонентный подход',
        text: 'Повторяющиеся элементы выносятся в компоненты и переиспользуются в разных местах.',
    },
    {
        title: 'Create-React-App',
        text: 'Утилита для генерации настроенного стартового реакт-проекта.',
        tags: [STRINGS.CSS, STRINGS.JAVASCRIPT],
    },
]

export const getCards = () => {
    const cards: CardType[] = []
    data.forEach(data => cards.push(createCard(data.title, data.text, data.tags)))
    return cards
}

const createCard = (title: string, text: string, tags?: string[]) => ({
    id: v1(),
    title,
    text,
    tags: tags || Array<string>(),
    likes: getRandomInteger() || DEFAULT_VALUES.LIKES,
    dislikes: getRandomInteger() || DEFAULT_VALUES.DISLIKES,
    comments: Array<string>(getRandomInteger()),
    favorite: false,
} as CardType)

export const cardOptions: OptionType[] = [
    {name: STRINGS.ALL},
    {name: STRINGS.UNCATEGORIZED},
    {name: STRINGS.REACT},
    {name: STRINGS.JAVASCRIPT},
    {name: STRINGS.HTML},
    {name: STRINGS.CSS},
]