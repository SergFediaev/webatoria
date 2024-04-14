import {v1} from 'uuid'
import {DEFAULT_VALUES, STRINGS} from '../constants'
import {OptionType} from '../components/select/Select'
import {CardType, DataType} from '../types'
import {getRandomInteger} from '../utils'

const data: DataType[] = [
    {
        title: 'ReactJS',
        text: 'Библиотека для создания пользовательских интерфейсов. Не фреймворк, потому что не достаточно инструментов из коробки для полноценной разработки, например даже маршрутизацию надо отдельно устанавливать.\n\nС другой стороны плюс библиотеки в том, что её можно встроить в уже существующий проект и потихоньку переделывать его на реакт',
        tags: [STRINGS.REACT],
    },
    {
        title: 'ReactDOM, ReactNative, ReactVR',
        text: 'Дополнительные библиотеки, которые нужно установить в проект вместе с основной библиотекой React, чтобы разрабатывать под определенную платформу.',
        tags: [STRINGS.REACT],
    },
    {
        title: 'Декларативный подход реакта',
        text: 'Мы указываем реакту, что нужно сделать (например вызываем setState), но не заботимся о том, как это реакт выполнит.\n\nИмперативный подход - это наоборот про то, как делать.',
    },
    {
        title: 'Компонентный подход',
        text: 'Повторяющиеся элементы выносятся в компоненты и переиспользуются в разных местах.',
        tags: [STRINGS.REACT],
    },
    {
        title: 'Create-React-App',
        text: 'Утилита для генерации настроенного стартового реакт-проекта.',
    },
    {
        title: 'Какие плюсы реакта?',
        text: '1. Производительность (без Реакта перерисовывается весь DOM, благодаря сравнению Виртуальных DOMов перерисовывается только необходимая часть DOM).\n\n2. Масштабируемость (компоненты)',
        tags: [STRINGS.REACT],
    },
    {
        title: 'Как работает Реакт ? (рендер - т.е. первый запуск, затем уже ререндеры)',
        text: 'Запускаем yarn start - начнет отрисовываться index.html.\n\nЗапускается script > index.tsx > App.tsx (компоненты возвращают JSX).\n\nBabel транспилятор превращает JSX в JS.\n\nСоздается Virtual DOM - это объект, легковесная версия DOM, у него есть только СВОЙСТВА, но нет методов, и к СВОЙСТВАМ мы доступа не имеем. DOM хранится в браузере, а Virtual DOM в оперативной памяти компьютера.\n\nНа основе Virtual DOM создается DOM, который отрисовывается в браузере.\n\nКогда React создает новый виртуальный дом, он заменяет старый виртуальный дом ссылкой на новый объект в памяти. Garbage collector удаляет старый неактуальный виртуальный дом из-за отсутствия ссылок на него.',
        tags: [STRINGS.REACT],
    },
    {
        title: 'Разница между компонентом? (функция возвращающая JSX) и Элементом (тэг)',
        text: 'Элемент мы видим в браузере, компонент не видим.',
        tags: [STRINGS.REACT, STRINGS.HTML],
    },
    {
        title: 'Что такое DOM?',
        text: 'Это объект, в нем есть свойства и методы. HTML-документ в виде древовидной структуры объектов (узлов).\n\nУзел - это объект в структуре дерева: элементы HTML (тэги), текст, атрибуты (src, href, class,Id, disabled, style, placeholder, required) и комментарии.',
        tags: [STRINGS.JAVASCRIPT, STRINGS.HTML],
    },
    {
        title: 'Что такое window?',
        text: 'window - представляет окно браузера и содержит глобальный объект document.\n\ndocument - представляет целый HTML-документ.\n\nnodeName - имя узла.\n\nnodeValue - значение узла.',
        tags: [STRINGS.JAVASCRIPT, STRINGS.HTML],
    },
    {
        title: 'Методы document',
        text: 'createElement(tagName) - создает новый элемент указанного типа.\n\ngetElementById(id) - возвращает элемент с указанным идентификатором.\n\nappendChild(node) - добавляет дочерний узел в конец списка дочерних узлов.\n\nremoveChild(node) - удаляет указанный дочерний узел из элемента.',
        tags: [STRINGS.JAVASCRIPT],
    },
]

const createCards = () => {
    const cards: CardType[] = []
    data.forEach(data => cards.push(createCard(data.title, data.text, data.tags)))
    return cards
}

const createCard = (title: string, text: string, tags?: string[]): CardType => ({
    id: v1(),
    title,
    text,
    tags: tags || Array<string>(),
    likes: getRandomInteger() || DEFAULT_VALUES.LIKES,
    dislikes: getRandomInteger() || DEFAULT_VALUES.DISLIKES,
    comments: Array<string>(getRandomInteger()),
    favorite: false,
})

export const cardOptions: OptionType[] = [
    {name: STRINGS.ALL},
    {name: STRINGS.UNCATEGORIZED},
    {name: STRINGS.REACT},
    {name: STRINGS.JAVASCRIPT},
    {name: STRINGS.HTML},
    {name: STRINGS.CSS},
]