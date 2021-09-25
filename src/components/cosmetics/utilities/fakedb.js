// user localStorage as your db for now

const addToDb = (id) => {
    const exists = localStorage.getItem('Shopping_cart')
    let shopping_cart = {}
    if (!exists) {
        shopping_cart[id] = 1
    } else {
        shopping_cart = JSON.parse(exists);
        if (shopping_cart[id]) {
            const newCount = shopping_cart[id] + 1;
            shopping_cart[id] = newCount
        } else {
            shopping_cart[id] = 1
        }
    }

    localStorage.setItem('Shopping_cart', JSON.stringify(shopping_cart))

}

export { addToDb }