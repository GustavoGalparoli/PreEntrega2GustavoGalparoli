import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = (props) => {
    console.log(props)
  return (
    <div className='message-greting-container'>
        <h2 className='message_title'>{props.name}</h2>
    </div>
  )
}

export default ItemListContainer