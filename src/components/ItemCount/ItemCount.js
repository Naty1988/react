import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({ onAdd, stock, inicial = 1 }) => {
    const [count, setCount] = useState(inicial)

    const increment = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }
    if (stock === 0) {
        return <h1>no hay</h1>
    }

    return (
        <div className="boxCount">
            <button className="btnCount" onClick={decrement}>-</button>
            <p>{count}</p>
            <button className="btnCount" onClick={increment}>+</button>
            <button className="btnCount" onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount