import ItemList from '../ItemList/ItemList';
import './Item.css'
import { getProducts } from "../../asyncmock";
import { useState, useEffect } from "react";

const Item = () => {

    const [products, setProducts ] = useState([])
    useEffect(() => {
getProducts().then(response => {
    setProducts(response)
})
    }, [])
    console.log(products)

    return (
        <div className="cardItemContainer">
             {products.map(product => 
                    <div className="cardItem" key={product.id}>
                        <h1>{product.name}</h1>
                        <img className="imgItem" src={product.img}/>
                        <p>{product.category}</p>
                        <button className="cardItemBtn" >Ver detalle del producto</button>
                        <p>Stock disponible: {product.stock}</p>                                               
                    </div>)}
            
           
        </div>
    )
}
export default Item
