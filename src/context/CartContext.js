import { createContext, useState } from "react"
// import { getProducts } from "../asyncmock"

const Context = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log(cart)
    const addItem = (product, quantity) => {
        const objItemCarts = {
            ...product,
            quantity
        }
        setCart([...cart, objItemCarts])
    }

    const clearCart = () => {
        setCart([])
    }

    const getQuantity = () => {
        let count = 0
        cart.forEach(prod => {
            count = count + prod.quantity
        })
        return count
    }

const getTotal = () => {
    let total = 0
    cart.forEach(prod => {
        const subtotal = prod.price * prod.quantity
        total += subtotal
    })
    return total
}

    const removeItem = (id) => {
        let newProducts = cart.filter(elemento => id !== elemento.id)
        setCart(newProducts)  
        return newProducts
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    return (
        <Context.Provider value={{
            cart,
            addItem,
            clearCart,
            getQuantity,
            removeItem,
            getTotal,
            isInCart
        }}>
            {children}
        </Context.Provider>
    )
}
export default Context