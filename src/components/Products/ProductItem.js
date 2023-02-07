import React from 'react'
import IMG from "../../assets/img/samsung.jpg"
export const ProductItem = ({
    id,
    nombre, 
    desc, 
    precio, 
    img
}) => {
  return (
    <div>
       <div className="products">
        <div className="product">
          <a href="#">
            <div className="product__img">
              <img src={img} alt={nombre} />
            </div>
          </a>
          <div className="product__footer">
            <h1>{nombre}</h1>
            <p>{nombre}</p>
            <p className="price">€{precio}</p>
          </div>
          <div className='buttom'>
          <button className='btn'>Añadir al carrito</button>
          <div>
            <a href="#" className="btn">
              Vista
            </a>
          </div>
          </div>
          </div>
    </div>
    </div>
  )
}
