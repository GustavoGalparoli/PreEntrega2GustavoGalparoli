import React from 'react'
import logo from'../../assets/carrito.png'
import './CartWidget.css'

const CartWidget = () => {
  return (
    <div className='menu_navbar__logo'>
      <img className='menu_navbar__img' src={logo} alt="card widget"/>

    </div>
  )
}

export default CartWidget