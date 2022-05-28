import React, {useContext} from 'react';
import "../ProductosLista/ProductosLista.css";
import { DataContext } from '../../../context/Dataprovider';
import {ProductoItem} from "../ProductoItem/ProductoItem";

const ProductosLista = () => {
  const value = useContext(DataContext);
  const [productos] = value.productos;
  // console.log(productos);

  return (
    <div className='productos-lista-container'>
      <h1 className='productos-lista-title'>PRODUCTOS</h1>
      <div className='productos-lista'>
        {productos.map(producto => (
          <ProductoItem key={producto.id}
            id = {producto.id}
            title = {producto.title}
            price = {producto.price}
            image = {producto.image}
            category = {producto.category}
            cantidad = {producto.cantidad}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductosLista;