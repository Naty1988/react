const products = [
    {
        id: 1,
        name: 'kit 1',
        price: 2500,
        category: 'kits',
        img: 'http://http2.mlstatic.com/D_963515-MLA31599914750_072019-O.jpg',
        stock: 10,
        description: 'Descripción del kit 1'
    },
    {
        id: 2,
        name: 'kit 2',
        price: 3500,
        category: 'kits',
        img: 'http://http2.mlstatic.com/D_644840-MLA31150709063_062019-O.jpg',
        stock: 10,
        description: 'Descripción del kit 2' 
    },
    {
        id: 3,
        name: 'esponja',
        price: 200,
        category: 'productos',
        stock: 10,
        img: 'https://t1.uc.ltmcdn.com/es/posts/8/0/1/cada_cuanto_tiempo_se_deben_limpiar_las_esponjas_de_maquillaje_45108_0_600.jpg',
        description: 'Descripción del producto esponja'
    }  
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}