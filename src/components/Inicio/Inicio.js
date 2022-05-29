import React from 'react';
import "../Inicio/Inicio.css";
import { Link } from 'react-router-dom';

const Inicio = () => {
  return (
    <div className='inicio inicio-container'>
      <Link to="/"><h1 className=''>Inicio</h1></Link>
      <Link to="/productos"><h1 className=''>Productos</h1></Link>
    </div>
  )
}

export default Inicio;