import React from 'react'
import logo from'../../assets/carrito.png'
import './CartWidget.css'

import { Link,} from 'react-router-dom'


const CartWidget = () => {
  return (
    <div className='menu_navbar__logo'>
      <Link to="/cart"><img className='menu_navbar__img' src={logo} alt="card widget"/></Link>
    </div>
  )
}

export default CartWidget