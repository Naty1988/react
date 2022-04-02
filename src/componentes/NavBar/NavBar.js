import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <Link to='/'>
                <h1>Mariela Graziano Maquillajes</h1>
            </Link>
           <Link to='/category/productos'  className='Option' >Productos</Link>
            
            <Link to='/category/articulos'className='Option' >Artículos</Link>
            <Link to='/category/kits'className='Option' >Kits</Link>
            <CartWidget />
        </nav>
    )
}
export default NavBar