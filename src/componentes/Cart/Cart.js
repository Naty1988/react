import ItemDetail from "../Cart/Cart"
import { useContext } from "react"
import CartContex from '../../context/CartContext'
import './cart.css'
import { Link } from "react-router-dom"


const Cart = () => {

    const { cart, clearCart, removeItem, getTotal, getQuantity } = useContext(CartContex)

    if (getQuantity() === 0) {
        return (
            <div>
            <h1>Carrito vacio</h1>
            <Link to='/'>Recorrer la tienda</Link>
            </div>
        )
    }

    return (
        <div>
            <h1>Cart</h1>
            <ul className="cartBox">
                {cart.map(prod => <li className="cartLine" key={prod.id}> <img src="prod.img" />{prod.name} Precio unitario: $ {prod.price} X {prod.quantity} unidades Subtotal: $ {prod.price * prod.quantity}
                    <button className="cartItemBtn" onClick={() => removeItem(prod.id)}>X</button>
                </li>)}
            </ul>
            <h1>Total: $ {getTotal()}</h1>
            <button className="cartItemBtn" onClick={clearCart}>Vaciar carrito</button>
        </div>

    )
}
export default Cart