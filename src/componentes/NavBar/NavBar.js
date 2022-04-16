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
                    <img className='imgLogo' src='https://scontent.feze12-1.fna.fbcdn.net/v/t39.30808-6/241015061_4428122163918451_7219967911052860076_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=b419dz1F_tMAX82L_e4&_nc_ht=scontent.feze12-1.fna&oh=00_AT83hQ4BFr34E8m2U6OoRpxlP-UwwdT730M3CIoEHa77gQ&oe=62515E51'></img>
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