import { useContext, useState } from "react"
import CartContex from '../../context/CartContext'
import './cart.css'
import { Link } from 'react-router-dom'
import { createOrderAndUpdateStock } from "../../services/firebase/firestore"
import { useNotification } from '../../notification/notification'

const Cart = () => {

    const [loading, setLoading] = useState(false)

    const { cart, clearCart, removeItem, getTotal, getQuantity } = useContext(CartContex)

    const { setNotification } = useNotification()

    const [name, setName] = useState()
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState()

    const createOrder = () => {
        setLoading(true)

        const objOrder = {
            buyer: {
                name: name,
                phone: phone,
                email: email,
            },
            items: cart,
            total: getTotal()
        }

        createOrderAndUpdateStock(cart, objOrder).then(id => {
            clearCart()
            setNotification('success', `La orden se genero correctamente, su codigo de orden es: ${id}`)
        }).catch((error) => {
            if (error && error.name === 'outOfStockError' && error.products.length > 0) {
                const stringProducts = error.products.map(prod => prod.dataDoc.name).join(', ')

                setNotification('error', `${error.products.length > 1 ? 'Los productos' : 'El producto'} ${stringProducts} no ${error.products.length > 1 ? 'tienen' : 'tiene'} stock`)
            } else {
                console.log(error)
            }
        }).finally(() => {
            setLoading(false)
        })
    }

    if (loading) {
        return <h1>Se esta procesando la orden</h1>
    }

    if (getQuantity() === 0) {
        return (
            <div className="align">
                <h1>Carrito vacio</h1>
                <div className="button"><Link to='/' className="color">Recorrer la tienda</Link></div>
            </div>
        )
    }

    return (
        <div>
            <h1>Cart</h1>
            <ul className="cartBox">
                {cart.map(prod => <li className="cartLine" key={prod.id}> {prod.name} Precio unitario: $ {prod.price} X {prod.quantity} unidades Subtotal: $ {prod.price * prod.quantity}
                    <button className="cartItemBtn" onClick={() => removeItem(prod.id)}>X</button>
                </li>)}
            </ul>
            <h1>Total: $ {getTotal()}</h1>
            <h1> Datos personales</h1>
            <div>
                <form>
                    <label> Nombre: </label>
                    <input required type="text" id="name" name="name" onChange={e => setName(e.target.value)} />
                    <label>Teléfono: </label>
                    <input type="number" id="phone" name="phone" onChange={e => setPhone(e.target.value)} />
                    <label>Mail: </label>
                    <input type="email" id="email" name="email" onChange={e => setEmail(e.target.value)} />
                </form>
            </div>
            <button className="cartItemBtn" onClick={clearCart}>Vaciar carrito</button>
            <button className="cartItemBtn" onClick={createOrder}>Confirmar compra</button>
        </div>

    )
}
export default Cart