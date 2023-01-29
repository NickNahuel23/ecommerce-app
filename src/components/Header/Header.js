import React from 'react'


const Header = () => {
  return (
    <header>
      <div className='menu'>
        <box-icon name="menu"></box-icon>
    
      </div>
      
        <ul>
          <li>
            <a href="#">INICIO</a>
          </li>
          <li>
          <a href="#">PRODUCTOS</a>
          </li>
        </ul>
        <div className='cart'>
        <box-icon name="cart"></box-icon>
        <span className='item__total'>0</span>
         </div>
    </header>
  )
}

export default Header

