const setLocalStorage = (item) => {
    localStorage.setItem('cartItems', JSON.stringify(item) )
}
const getLocalStorage = () => {
    return localStorage.getItem('cartItems')
}
// localStorage.clear()