import { createContext, useState } from "react"
import { getProducts } from "../asyncmock"

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

    const removeItem = (id) => {
        let itemRemoved = cart.filter(elemento => id !== elemento.id)
        console.log(itemRemoved)
        setCart(itemRemoved)  
        return itemRemoved
    }

    return (
        <Context.Provider value={{
            cart,
            addItem,
            clearCart,
            getQuantity,
            removeItem
        }}>
            {children}
        </Context.Provider>
    )
}
export default Context