import React, { useState, useEffect, createContext } from "react";
import Data from "./Data"
export const DataContext = createContext();

export const DataProvider = (props) => {
	const [products, setProducts] = useState([]);
	const [menu, setMenu] = useState(false)
	const [carrito, setCarrito] =useState([])
	const [total, setTotal] = useState(0)

	console.log(carrito)

  useEffect(() => {
		const product = Data.items 
		if(product){
			setProducts(product)
		}else{
			setProducts([])
		}
	}, []);

	const addCarrito = (id) =>{
		const check = carrito.every(item =>{
			return item.id !== id
			
		})
		if(check){
			const data = products.filter(product =>{
				return product.id === id
			})
			setCarrito([...carrito, ...data])
		}else{
			alert("El producto se ha añadido al carrito")
		}
	}
	useEffect(() =>{
		const dataCarrito = JSON.parse(localStorage.getItem('dataCarrito'))
		if(dataCarrito){
			setCarrito(dataCarrito)
		}
	},[])

	useEffect(() =>{
		localStorage.setItem('dataCarrito', JSON.stringify(carrito))
	},[carrito])

	useEffect(() =>{
		const getTotal = () =>{
			const res = carrito.reduce((prev, item) =>{
				return prev + (item.price * item.cantidad)
			},0)
			setTotal(res)
		}
		getTotal()
	},[carrito])
	
	const value = {
		products : [products],
		menu: [menu, setMenu],
		carrito: [carrito, setCarrito],
		addCarrito: addCarrito,
		total: [total, setTotal]
	}
	return (
		<DataContext.Provider value={value}>
			{props.children}
		</DataContext.Provider>
	)
};



















// export const DataProvider = (props) => {
//     const [products, setProducts] = useState([])
//     const [menu, setMenu] = useState(false)

//     const [carrito, setCarrito] = useState(() => {
//         const datCarrito = localStorage.getItem('dataCarrito');
//         const dataCarrito = JSON.parse(datCarrito);
//         return dataCarrito;
//     });


//     useEffect(() => {
//         const product = Data.items
//         if (product) {
//             setProducts(product)
//         } else {
//             setProducts(product)
//         }

//     }, [])

//     const addCarrito = (id) => {
//         const check = carrito.every(item => {
//             return item.id !== id;
//         })
//         if (check) {
//             const data = products.filter(product => {
//                 return product.id === id
//             })
//             setCarrito([...carrito, ...data])
//         } else {
//             alert("el producto se ha añadido al carrito")
//         }
//     }

//     useEffect(() => {
//         localStorage.setItem('dataCarrito', JSON.stringify(carrito));
//     }, [carrito]);


//     const value = {
//         products: [products],
//         menu: [menu, setMenu],
//         addCarrito: addCarrito,
//         carrito: [carrito, setCarrito]

//     }



//     return (
//         <DataContext.Provider value={value}>

//             {props.children}
//         </DataContext.Provider>
//     )
// }