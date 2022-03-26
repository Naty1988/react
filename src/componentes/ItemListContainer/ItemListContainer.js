import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ saludo }) => {
    return (
        <div>
            <h1>{saludo}</h1>
            <ItemList/>
        </div>
    )
}
export default ItemListContainer