export const getFromLocalStorage = <ItemType>(key: string, defaultItem: ItemType): ItemType => {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : defaultItem
}

export const setToLocalStorage = <ItemType>(key: string, item: ItemType) => localStorage.setItem(key, JSON.stringify(item))

// ToDo: Same to session storage.