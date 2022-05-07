import CartWidget from "../CartWidget/CartWidget"
import { useContext } from "react"
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from "react";
import CartContext from '../../context/CartContext'
import Cart from "../Cart/Cart"
import { getCategories } from "../../services/firebase/firestore";
import { collection } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/index'

const NavBar = () => {

    const { getQuantity } = useContext(CartContext)

    const collectionNav = collection(firestoreDb, 'categorys')

    const [categorys, setCategorys] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        getCategories().then(categorys => {
            setCategorys(categorys)

        }).catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <nav>
            <Link to='/' className='noDeco'>
                <div className='boxLogo'>
                    <picture>
                        <img className='imgLogo' src='https://uploads.turbologo.com/uploads/design/hq_preview_image/1903103/draw_svg20210507-22909-1p9cmk6.svg.png'></img>
                    </picture>
                    <h1 className='title'>Mariela Graziano Maquillajes</h1>
                </div>
            </Link>

            {categorys.map(cat =>

                <NavLink to={`/category/${cat.id}`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} key={`${cat.id}`}>{`${cat.label}`}</NavLink>

            )}
            {getQuantity() > 0 && <CartWidget />}
        </nav>
    )
}
export default NavBar