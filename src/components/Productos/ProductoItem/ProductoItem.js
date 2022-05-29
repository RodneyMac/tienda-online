import React from 'react';
import "../ProductoItem/ProductoItem.css";
import { useContext } from 'react';
import { DataContext } from '../../../context/Dataprovider';
import {Link} from "react-router-dom";

export const ProductoItem = ({
  id,
  image,
  name, 
  type,
  price,
}) => {
  
  const value = useContext(DataContext);
  const addCarrito = value.addCarrito;

  return (
    <div className="producto-item-container" key={id}>
      <Link to={`/producto/${id}`}>
        <div className='producto-img'>
          <img src={image} alt={name}/>
        </div>
      </Link>
      <div className='producto-footer'>
        <h1><strong className='nombre'>Nombre:</strong> {name}</h1>
        <p><strong className='tipo'>Tipo: </strong>{type}</p>
        <p className='price'><strong className='precio'>Precio </strong>$ {price}</p>  
      </div>
      <div className='buttom btn-p'>
        <button className='btn btn-add' onClick={() => addCarrito(id)}>Añadir al carrito</button>
      </div>
    </div>
  )
}