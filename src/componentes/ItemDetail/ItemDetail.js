import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
       
    const onAdd = (quantity) => {
        console.log(quantity)
      }
    
    return (
        <article className="cardItemContainer">
            
                    <div>
                        <h1>Nombre del producto: {name}</h1>
                        <img className="imgItem" src={img} alt={name}/>
                        <p>Categoría: {category}</p>
                        <p>Descripción:{description}</p>
                        <p>${price}</p>
                        <p>Stock disponible: {stock}</p> 
                         
                          <ItemCount initial={0} stock={5} onAdd={onAdd} />                                       
                    </div>      
            </article>
    )
}
export default ItemDetail