const products = [
    {
        id: 1,
        name: 'kit 1',
        price: 2500,
        category: 'kits',
        img: 'http://http2.mlstatic.com/D_963515-MLA31599914750_072019-O.jpg',
        stock: 10,
        description: 'El kit 1 es ideal para pieles secas ya que incluye una crema humectante, loción tonificante y protector solar. '
    },
    {
        id: 2,
        name: 'kit 2',
        price: 3500,
        category: 'kits',
        img: 'http://http2.mlstatic.com/D_644840-MLA31150709063_062019-O.jpg',
        stock: 10,
        description: 'El kit 2 es ideal para pieles grasas ya que incluye una crema humectante, loción tonificante y protector solar.' 
    },
    {
        id: 3,
        name: 'esponja',
        price: 200,
        category: 'productos',
        stock: 10,
        img: 'https://t1.uc.ltmcdn.com/es/posts/8/0/1/cada_cuanto_tiempo_se_deben_limpiar_las_esponjas_de_maquillaje_45108_0_600.jpg',
        description: 'Este producto es indispensable para tu rutina diaria de limpieza y cuidado de la piel.'
    }  
]

export const getProducts = (category) => {
  
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            category ? resolve(products.filter(prod => prod.category === category)) : resolve(products)
        }, 2000)
    })
}

export const getProductsById = (id) => {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === parseInt(id))) 
        }, 2000)
    })
}