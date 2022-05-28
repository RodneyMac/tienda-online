import React, {useContext} from 'react';
import "../Header/Header.css";
import {FaShoppingCart} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { DataContext } from '../../context/Dataprovider';

const Header = () => {

  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [carrito] = value.carrito;

  const toggleMenu = () => {
    setMenu(!menu);
  }

  return (
    <div className='container'>
      <div className='content'>
        <Link to='/' className='links'>
          <div className='logo'>Mercat</div>
        </Link>
        <div className='btn-header'>
          <Link to='/' className='links'><div>INICIO</div></Link>
          <Link to='/productos' className='links'><div>PRODUCTOS</div></Link>
        </div>
        <div className='cart' onClick={toggleMenu}>
          <div className="cart" title='Carrito'><FaShoppingCart/></div>
          <span className='item-total'>{carrito.length}</span>
        </div>
      </div>
    </div>
  )
}

export default Header;