export const saveToLocalStorage = (item) => {
    localStorage.setItem('selections', JSON.stringify(item))
}