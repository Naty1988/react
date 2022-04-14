import ItemDetail from "../Cart/Cart"
import { useContext } from "react"
import CartContex from '../../context/CartContext'
import './cart.css'


const Cart  = () => {

    const { cart, clearCart, removeItem } = useContext(CartContex)

    return (
        <div>
            <h1>Cart</h1>
            <ul className="cartBox">
                {cart.map(prod => <li className="cartLine" key={prod.id}> <img src="prod.img"/>{prod.name} X {prod.quantity} unidades
                                    <button className="cartItemBtn" onClick ={()  =>  removeItem(prod.id)}>Quitar este producto</button>  
                                </li>)}
            </ul>
            <button className="cartItemBtn" onClick={clearCart}>Vaciar carrito</button>
        </div>
        
    )
}
export default Cart