import React from 'react';
import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../asyncmock'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        getProducts(categoryId).then(items => {
            setProducts(items)
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })
        return (() => {
            setProducts([])
        })
    }, [categoryId])

    return (
        <div>
            {
                loading ?
                    <h1>Cargando...</h1> :
                    products.length ?
                        <ItemList products={products} /> :
                        <h1>No se encontraron productos en esta categoría</h1>
            }
        </div>
    )
}
export default ItemListContainer