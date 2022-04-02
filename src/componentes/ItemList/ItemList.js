import './ItemList.css' 
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import Item from "../Item/Item";

const ItemList =({products}) => {

    return(
        <ul>
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </ul>
    )
}
export default ItemList;