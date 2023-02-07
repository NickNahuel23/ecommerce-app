import React, { useState, useEffect, createContext  } from "react";
import Data from "./Data"
export const DataContext = createContext();

export const DataProvider = (props) =>{
    const [products,setProducts] = useState([])


useEffect(() =>{
const product = Data.items
if(product) {
   setProducts(product) 
}else{
    setProducts(product) 
}

},[])
 
const value = {
    products:[products]
}
return (
    <DataContext.Provider value = {value}>

        {props.children}
    </DataContext.Provider>
)
}