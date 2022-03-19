import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'

const NavBar = () => {
    return (
        <nav>
            <h1>Mariela Graziano Maquillajes</h1>
            <button>Productos</button>
            <button>Artículos</button>
            <button>Kits</button>
            <CartWidget/>
        </nav>
    )
}
export default NavBar