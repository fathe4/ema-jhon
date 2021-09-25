export function add(num1, num2) {
    return num1 + num2
}
function multiply(num1, num2) {
    return num1 * num2
}

const products = [
    {
        "id": 1,
        "name": "iPhone",
        "price": 25000
    },
    {
        "id": 2,
        "name": "Mouse",
        "price": 200
    },
    {
        "id": 3,
        "name": "Monitor",
        "price": 14000
    },
    {
        "id": 4,
        "name": "PC",
        "price": 30000
    }
]

let total = 0;
for (const product of products) {
    total = total + product.price
}

// reduce
const reducePRoducts = (prev, current) => prev + current
products.reduce(reducePRoducts, 0)


export { multiply }