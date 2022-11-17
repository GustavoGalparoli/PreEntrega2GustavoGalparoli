import './ItemDetail.css'

const ItemDetail = ({ productSelected }) => {
  return (
    <div className='contenedor_producto'>
      <div className='producto'>
        <img src={productSelected.img} className="foto" />
        <h1>{productSelected.nombre}</h1>
        <h1>${productSelected.precio}</h1>
      </div>
    </div>
  );
};

export default ItemDetail