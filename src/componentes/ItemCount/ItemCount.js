import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({ initial = 0, stock, onAdd }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
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