import React from 'react';
import "../ProductoItem/ProductoItem.css";
import { useContext } from 'react';
import { DataContext } from '../../../context/Dataprovider';
import {Link} from "react-router-dom";

export const ProductoItem = ({
  id, 
  title, 
  price,
  image,
  category
}) => {
  
  const value = useContext(DataContext);
  const addCarrito = value.addCarrito;

  return (
    <div className="producto-item-container" key={id}>
      <Link to={`/producto/${id}`}>
        <div className='producto-img'>
          <img src={image} alt={title}/>
        </div>
      </Link>
      <div className='producto-footer'>
        <h1>{title}</h1>
        <p>{category}</p>
        <p className='price'>$ {price}</p>
      </div>
      <div className='buttom'>
        <button className='btn btn-add' onClick={() => addCarrito(id)}>Añadir al carrito</button>
        <div className='btn-vista'>
          <a href='#' className='btn'>Vista</a>
        </div>
      </div>
    </div>
  )
}