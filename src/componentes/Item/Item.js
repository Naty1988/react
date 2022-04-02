import './Item.css'
// import { getProducts } from "../../asyncmock";
// import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

const Item = ({id, name, img, category, stock}) => {

//     const [products, setProducts ] = useState([])
//     useEffect(() => {
// getProducts().then(response => {
//     setProducts(response)
// })
//     }, [])
//     console.log(products)

    return (
        <article className="cardItemContainer">
            
                    <div className="cardItem" key={id}>
                        <h1>{name}</h1>
                        <img className="imgItem" src={img} alt={name}/>
                        <p>{category}</p>
                        <Link to= {`/detail/${id}`} className="cardItemBtn">Ver detalle</Link>
                        <p>Stock disponible: {stock}</p>                                               
                    </div>
            
           
        </article>
    )
}
export default Item
