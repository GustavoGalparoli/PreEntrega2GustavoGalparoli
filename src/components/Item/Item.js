import { Link } from "react-router-dom"
import './Item.css'

const Item = ({product}) => {
  return (
    
    <div className="contenedor_producto">
      <Link to={`item/${product.id}`}>
        <img src={product.img} className="foto" />
        <h2>{product.nombre}</h2>
      </Link>
        <h2>${product.precio}</h2>
    </div>
    
  )
}

export default Item