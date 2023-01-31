import React from 'react'
import IMG from "../../assets/img/81Wre-ue9SL.jpg"

const ProductList = () => {
  return (
    <>
      <h1 className="title">PRODUCTOS</h1>
      <div className="productos">
        <div className="producto">
          <a href='#'>
            <div className="producto_img">
              <img src={IMG} alt="" />
            </div>
          </a>
          <div className="producto_footer">
            <h1>Title</h1>
            <p>Categoría</p>
            <p className="price">€320</p>
          </div>
          <div className="buttom">
            <button className='btn'>
              Añadir al carrito
            </button>
            <div>
              <a href='#' className='btn'>Vista</a>
            </div>
          </div>
        </div>
        <div className="producto">
          <a href='#'>
            <div className="producto_img">
              <img src={IMG} alt="" />
            </div>
          </a>
          <div className="producto_footer">
            <h1>Title</h1>
            <p>Categoría</p>
            <p className="price">€320</p>
          </div>
          <div className="buttom">
            <button className='btn'>
              Añadir al carrito
            </button>
            <div>
              <a href='#' className='btn'>Vista</a>
            </div>
          </div>
        </div>
        <div className="producto">
          <a href='#'>
            <div className="producto_img">
              <img src={IMG} alt="" />
            </div>
          </a>
          <div className="producto_footer">
            <h1>Title</h1>
            <p>Categoría</p>
            <p className="price">€320</p>
          </div>
          <div className="buttom">
            <button className='btn'>
              Añadir al carrito
            </button>
            <div>
              <a href='#' className='btn'>Vista</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductList