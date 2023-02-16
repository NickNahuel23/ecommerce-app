import React, { useContext } from 'react'
//import Card from "../../assets/img/samsung.jpg"
import { DataContext } from "../Context/DataProvider"


export const Carrito = () => {
    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [carrito, setCarrito] = value.carrito;
    const [total] = value.total;

    const tooglefalse = () => {
        setMenu(false);
    };

    const reduce = id => {
        carrito.forEach(item => {
            if (item.id === id) {
                item.cantidad === 1 ? item.cantidad = 1 : item.cantidad -= 1;
            }
            setCarrito([...carrito])
        })
    }
    const increase = id => {
        carrito.forEach(item => {
            if (item.id === id) {
                item.cantidad += 1;
            }
            setCarrito([...carrito])
        })
    }

    const removeProducto = id => {
        if (window.confirm("¿Quieres eliminarlo de la cesta?")) {
            carrito.forEach((item, index) => {
                if (item.id === id) {
                    item.cantidad = 1;
                    carrito.splice(index, 1)//ELIMINA LO QUE ESTÁ DENTRO DEL CARRITO
                }
            })
            setCarrito([...carrito])
        }
    }

    const show1 = menu ? "carritos show" : "carrito";
    const show2 = menu ? "carrito show" : "carrito";



    return (
        <div className={show1}>
            <div className={show2}>
                <div onClick={tooglefalse} className="carrito__close">
                    <box-icon name="x"></box-icon>
                </div>
                <h2>Su Carrito</h2>
                <div className="carrito_center">
                    {


                carrito.length === 0 ? <h2 style={{ textAlign: "center", fontSize: "3rem" }}>Carrito Vacio</h2> : <>
                    {
                            carrito.map((product) => (
                                <div className="carrito_item" key={product.id}>
                                   <img src={product.img} alt={product.title} />
                                      <div>
                                          <h3> {product.title} </h3>
                                          <p className="price">${product.price}</p>
                                        </div>
                                        <div>
                                            <box-icon
                                                onClick={() => increase(product.id)} name="up-arrow"
                                                type="solid"
                                            />
                                            <p className="cantidad">{product.cantidad}</p>
                                            <box-icon
                                                onClick={() => reduce(product.id)}
                                                name="down-arrow"
                                                type="solid"
                                            />
                                        </div>
                                        <div
                                            onClick={() => removeProducto(product.id)}
                                            className="remove__item"
                                        >
                                            <box-icon name="trash" />
                                        </div>
                                    </div>
                                ))
                            };

                        </>
                    }
                </div>

                <div className="carrito_footer">
                    <h3>Total: ${total}</h3>
                    <button className="btn">Payment</button>
                </div>
            </div>
        </div>
    );
};



// export const Carrito = () => {

//     const value = useContext(DataContext)
//     const [menu, setMenu] = value.menu
//     const [carrito, setCarrito]= value.carrito

//     const tooglefalse = () =>{
//         setMenu(false)
//     }

//     const show1 = menu ? "carritos show" : "carritos";
//     const show2 = menu ? "carrito show" : "carrito"




//     return (
//         <div className={show1}>
//             <div className={show2}>
//                 <div className='carrito_close' onClick={tooglefalse}>
//                     <box-icon name="x"></box-icon>
//                 </div>
//                 <h2>Su carrito</h2>
// {

//                 <div className='carrito_center'>
//                     <div className='carrito_item'>
//                         <img src={Card} alt="" />
//                         <div>
//                             <h3>Samsung Galaxy S21</h3>
//                             <p className='price'>€600</p>
//                         </div>
//                         <div>
//                             <box-icon name="up-arrow" type="solid"></box-icon>
//                             <p className='cantidad'>1</p>
//                             <box-icon name="down-arrow" type="solid"></box-icon>
//                         </div>
//                         <div className='remove_item'>
//                             <box-icon name="trash"> </box-icon>

//                         </div>
//                     </div>

//                 </div>
//                 }
//                 <div className='carrito_footer'>
//                     <h3>Total: 1000€</h3>
//                     <button className='btn'>Payment</button>
//                 </div>
//             </div>
//         </div>
//     )
// }




