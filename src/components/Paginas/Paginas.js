import React from 'react';
import {Routes, Route} from "react-router-dom";
import Inicio from '../Inicio/Inicio';

const Paginas = () => {
  return (
    <Routes>
        <Route path="/" element={<Inicio/>}/>
    </Routes>
  )
}

export default Paginas;