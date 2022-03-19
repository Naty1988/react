import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h1 style={{ color: 'red'}}>Mariela Graziano Maquillajes</h1>
            <button>Productos</button>
            <button>Artículos</button>
            <button>Kits</button>
            <CartWidget/>
        </nav>
    )
}
export default NavBar