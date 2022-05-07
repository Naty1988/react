import React from 'react';
import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList';
import { firestoreDb } from '../../services/firebase/index';
import { getProducts } from '../../services/firebase/firestore'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'

const ItemListContainer = () => {

    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId
            ? query(collection(firestoreDb, 'products'), where('category', '==', categoryId))
            : collection(firestoreDb, 'products')

        getDocs(collectionRef).then(querySnapshot => {
            console.log(querySnapshot.size)
            const products = querySnapshot.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            setProducts(products)
        }).catch(error => {
            console.log(error)
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
                    <h2>Cargando...</h2> :
                    products.length > 0 ?
                        <ItemList products={products} /> :
                        <h1>No se encontraron productos en esta categoría</h1>
            }
        </div>
    )
}
export default ItemListContainer