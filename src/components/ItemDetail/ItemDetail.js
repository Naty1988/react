import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from "../ItemCount/ItemCount"
import CartContext from '../../context/CartContext'
import { useNotification } from '../../notification/notification'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {


  const { addItem, isInCart } = useContext(CartContext)
  const { setNotification } = useNotification()

  const handleOnAdd = (count) => {
    console.log('Agregue al carrito')
  
    addItem({ id, name, price }, count)
    setNotification('success', 'Se agregaron correctamente los productos al carrito')
  }
  return (
    <article className="cardItemContainer">

      <div>
        <h1>Nombre del producto: {name}</h1>
        <img className="imgItem" src={img} alt={name} />
        <p>Categoría: {category}</p>
        <p>Descripción:{description}</p>
        <p>${price}</p>
        <p>Stock disponible: {stock}</p>

          {isInCart(id) ? <Link to='/cart' className="cardItemBtn">Terminar mi compra</Link> : <ItemCount onAdd={handleOnAdd} />}

      </div>
    </article>
  )
}
export default ItemDetail