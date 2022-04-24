import ItemDetail from "../Cart/Cart"
import { useContext } from "react"
import CartContex from '../../context/CartContext'
import './cart.css'
import { Link } from 'react-router-dom'
import { addDoc, collection, updateDoc, doc, getDocs, query, where, documentId, writeBatch } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase'


const Cart = () => {

    const { cart, clearCart, removeItem, getTotal, getQuantity } = useContext(CartContex)

    const createOrder = () => {

        const objOrder = {
            buyer: {
                name: 'Pepe',
                phone: '1530303030',
                email: 'pepe@email.com',
            },
            items: cart,
            total: getTotal()
        }
       
        const batch = writeBatch(firestoreDb)
        const outOfStock = []

        const ids = cart.map(prod => prod.id)
        const collectionRef = collection(firestoreDb, 'products')

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const prodQuantity = objOrder.items.find(prod => prod.id === doc.id).quantity
                    if (dataDoc.stock >= prodQuantity) {
                        batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity })
                    } else {
                        outOfStock.push({ id: doc.id, dataDoc })
                    }

                })
            }).then(() => {
                if (outOfStock.length === 0) {
                    const collectionRef = collection(firestoreDb, 'orders')
                    return addDoc(collectionRef, objOrder)
                } else {
                    return Promise.reject({ name: 'outOfStocError', products: outOfStock })
                }
            }).then(() => {
                batch.commit()
                console.log('se genero la orden')
            }).catch((error) => {
                if (error && error.name === 'outOfStockError' && error.products.length > 0) {
                    console.log(error.products)
                } else {
                    console.log(error)
                }
            })

    }



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
            <button className="cartItemBtn" onClick={createOrder}>Confirmar compra</button>
        </div>

    )
}
export default Cart