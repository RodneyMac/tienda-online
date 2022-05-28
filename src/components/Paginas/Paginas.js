import React from 'react';
import {Routes, Route} from "react-router-dom";
import Inicio from '../Inicio/Inicio';
import ProductosLista from '../Productos/ProductosLista/ProductosLista';
import {ProductosDetalles} from '../Productos/ProductosDetalles/ProductosDetalles';

const Paginas = () => {
  return (
    <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/productos" element={<ProductosLista/>}/>
        <Route path="/producto/:id" element={<ProductosDetalles/>}/>
    </Routes>
  )
}

export default Paginas;