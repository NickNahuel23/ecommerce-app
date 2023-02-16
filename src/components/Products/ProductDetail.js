import React, {useContext,useEffect, useState} from 'react'
import { DataContext } from '../Context/DataProvider'
import {useParams } from "react-router-dom"
import { ProductItem } from './ProductItem'



export const ProductDetail = () => {
  const value = useContext(DataContext)
  const [products] = value.products
  const addCarrito= value.addCarrito
  const [detail, setDetail] = useState([])
  const [url, setUrl] = useState(0)
  const [img, setImg] = useState('')
  const params = useParams()
  let item = 0

  useEffect(() =>{
    products.forEach(product => {
      if(product.id === parseInt (params.id)){
     setDetail(product)
      }
      
    });
  }, [params.id, products])

  return (
    <>
    {
      <div className='details'>
        <h2>{detail.title}</h2>
        <p className='price'>E</p>
        <div className='grid'> 
        <p className='nuevo'>Nuevo</p>
        <div className='size'>
          <select placeholder='Tamaño'>
            <option value="1">1</option>
            <option value="1">2</option>
            <option value="1">3</option>
            <option value="1">4</option>
            <option value="1">5</option>
          </select>
          <p>Tamaño</p>
        </div>
        </div>
<button>Añadir al carrito</button>
<input type="range" min="1" max="36"></input>
      </div>
    }
      
      
    </>
  )
}


