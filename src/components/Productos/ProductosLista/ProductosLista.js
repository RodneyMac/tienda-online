import React, {useContext} from 'react';
import "../ProductosLista/ProductosLista.css";
import { DataContext } from '../../../context/Dataprovider';
import {ProductoItem} from "../ProductoItem/ProductoItem";

const ProductosLista = () => {
  const value = useContext(DataContext);
  const [productos] = value.productos;

  return (
    <div className='productos-lista-container'>
      <h1 className='productos-lista-title'>PRODUCTOS</h1>
      <div className='productos-lista'>
        {productos.map(producto => (
          <ProductoItem key={producto.id}
            id = {producto.id}
            image = {producto.image}
            name = {producto.name}
            type = {producto.type}
            price = {producto.price}
            cantidad = {producto.cantidad}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductosLista;