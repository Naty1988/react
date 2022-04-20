import CartWidget from "../CartWidget/CartWidget"
import { useContext } from "react"
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from "react";
import CartContext from '../../context/CartContext'
import Cart from "../Cart/Cart"
import { firestoreDb } from "../../services/firebase"
import { getDocs, collection, querySnapshot } from 'firebase/firestore'



const NavBar = () => {

    const { getQuantity } = useContext(CartContext)

    const collectionNav = collection(firestoreDb, 'categorys')

    const [categorys, setCategorys] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        getDocs(collectionNav).then(querySnapshot => {
            const categorys = querySnapshot.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            setCategorys(categorys)
            console.log(categorys)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })

    }, [])

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
            
            {getQuantity() > 0 && <CartWidget />}

            {categorys.map(cat => 
            
            <NavLink to={`/category/${cat.id}`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} key={cat.id}>{cat.label}</NavLink>           
                        
            )}
        </nav>
    )
}
export default NavBar