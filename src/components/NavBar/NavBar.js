import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'


const NavBar = () => {
  return (
    <div className='menu-navbar-container'>
        <h1 className='menu-title'> Shop Online</h1>
        <ul className='menu-items'>
            <li>
                <a href='!#'className='menu-list'>Inicio</a>
            </li>
            <li>
                <a href='!#'className='menu-list'>Productos</a>
            </li>
            <li>
                <a href='!#'className='menu-list'>Galeria</a>
            </li>
            <li>
                <a href='!#'className='menu-list'>Nosotros</a>
            </li>

        </ul>
<CartWidget/>

    </div>
  )
}

export default NavBar