import React, {useContext} from 'react';
import { DataContext } from '../Context/DataProvider'; 
import { ProductItem } from './ProductItem';

export const Products = () => {

  const value= useContext(DataContext)
  const [products] = value.products

  return (
    <>
      <h1 className="title">SMARTPHONES</h1>
      <div className="products">
        {
          products.map(product=>(
            <ProductItem key={product.id} 
            id={product.id} 
            nombre={product.nombre} 
            desc={product.desc} 
            precio={product.precio} 
            img={product.img} 
        />
          ))
        }
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        </div>
    </>
  );
};
