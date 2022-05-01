import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/firebase/firestore";
import { QuerySnapshot } from "firebase/firestore";
import { querytring } from "@firebase/util";

const ItemDetailContainer = ({ addToCart, cart }) => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() => {
        setLoading(true)

        getProductById(productId).then(prod => {
            setProduct(prod)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId])

    if (loading) {
        return <h1>Cargando...</h1>
    }

    return (
        <div>
            <h1>Detalle del producto</h1>
            <ItemDetail {...product} addToCart={addToCart} cart={cart} />
        </div>
    )

}

export default ItemDetailContainer