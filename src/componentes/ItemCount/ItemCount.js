import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({ onAdd }) => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
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