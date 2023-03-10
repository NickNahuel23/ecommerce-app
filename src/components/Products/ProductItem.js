import React, { useContext } from 'react';
//import IMG from "../../assets/img/samsung.jpg";
import { Link } from "react-router-dom";
import { DataContext } from "../Context/DataProvider";


export const ProductItem = ({ id, title, category, price, img }) => {

  const value = useContext(DataContext)
  const addCarrito = value.addCarrito;

  return (
    

    <div>
      <div className="products">
        <div key = {id}className="product">
          <Link to={`/product/${id}`}>
             <div className="product__img"> 
             <img src={img} alt={title} />
              </div> 
            </Link>
            <div className="product__footer">
            <h1>{title}</h1>
            <p>{category}</p>
            <p className="price">€{price}</p>
          </div>
          <div className='buttom'>
          <button onClick={() => addCarrito(id)} className="btn">Añadir al carrito</button>
            <div>
              <Link to={`/product/${id}`} className="btn">Vista</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    )}









  