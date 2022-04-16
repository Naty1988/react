import { Link } from "react-router-dom"
import { useContext } from "react"
import CartContext from '../../context/CartContext'

const CartWidget = () => {

const { getQuantity } = useContext(CartContext)

    
    return (
        <Link to={'/cart'}>
            <img src="https://cdn-icons-png.flaticon.com/512/107/107831.png" />
            <div>{getQuantity()}</div>
        </Link>
    )
}

export default CartWidget