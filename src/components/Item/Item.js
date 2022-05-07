import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, name, img, category, stock }) => {

    return (
        <article className="cardItemContainer">

            <div className="cardItem" key={id}>
                <h1>{name}</h1>
                <img className="imgItem" src={img} alt={name} />
                <p>{category}</p>
                <Link to={`/item/${id}`} className="cardItemBtn">Ver detalle</Link>
                <p>Stock disponible: {stock}</p>
            </div>
        </article>
    )
}
export default Item
