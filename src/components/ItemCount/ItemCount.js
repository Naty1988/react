import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({ onAdd, inicial = 1 }) => {
    const [count, setCount] = useState(inicial)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        if (count > 1) {
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