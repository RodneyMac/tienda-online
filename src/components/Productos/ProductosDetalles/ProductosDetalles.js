import React, {useState, useEffect, useContext } from 'react';
import { DataContext } from '../../../context/Dataprovider';
import { useParams } from 'react-router-dom';
import {ProductoItem} from "../ProductoItem/ProductoItem";

export const ProductosDetalles = () => {
  const value = useContext(DataContext);
  const [productos] = value.productos;
  const [detalle, setDetalle] = useState([]);
  const [url, setUrl]= useState(0);
  const [images, setImages] = useState('');
  const params = useParams();
  let item = 0;

  useEffect(() => {
    item=0;
    productos.forEach(producto =>{
      if(producto.id === parseInt(params.id)) {
        setDetalle(producto)
        setUrl(0)
      }
    })
  },[params.id, productos]);

  if(detalle.length < 1) return null;

  return (
    <>
      <h2 className="relacionados">Productos relacionados</h2>
      <div className="productos">
        {
          productos.map((producto) => {
            if((item < 6)&&(detalle.type === producto.type)) {
              item++;
            return <ProductoItem 
                  key={producto.id}
                  name={producto.name}
                  image={producto.image}
                  type={producto.type}
                  price={producto.price}
                  id={producto.id}
              />
            }
          })
        }
      </div>
    </>
  )
}