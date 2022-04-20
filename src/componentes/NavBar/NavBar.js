import CartWidget from "../CartWidget/CartWidget"
import { useContext } from "react"
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'
import CartContext from'../../context/CartContext'
import Cart from "../Cart/Cart"

const NavBar = () => {

const { getQuantity } = useContext(CartContext)

    return (
        <nav>
            <Link to='/' className='noDeco'>
                <div className='boxLogo'>
                    <picture>
                    <img className='imgLogo' src='http://assets.stickpng.com/images/584290baa6515b1e0ad75ac2.png'></img>
                </picture>
                <h1 className='title'>Mariela Graziano Maquillajes</h1>
                </div>
            </Link>
           <NavLink to='/category/productos' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Productos</NavLink>
            
            <NavLink to='/category/accesorios'className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} >Accesorios</NavLink>
            <NavLink to='/category/kits'className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Kits</NavLink>
            {getQuantity() > 0  && <CartWidget/>}           
        </nav>
    )
}
export default NavBar