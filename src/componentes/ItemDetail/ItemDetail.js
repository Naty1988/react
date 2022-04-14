import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from "../ItemCount/ItemCount"
import CartContext from '../../context/CartContext'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const [quantity, setQuantity] = useState(0)

  const { addItem } = useContext(CartContext)

  const handleOnAdd = (count) => {
    console.log('Agregue al carrito')
    setQuantity(count)
    addItem({ id, name, price }, count)
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

          {quantity === 0 ? <ItemCount onAdd={handleOnAdd} /> : <Link to='/cart' className="cardItemBtn">Terminar mi compra</Link>}

      </div>
    </article>
  )
}
export default ItemDetail