import React from 'react'
import Card from "../../assets/img/samsung.jpg"



export const Carrito = () => {
    return (
        <div className='carritos show'>
            <div className='carrito show'>
                <div className='carrito_close'>
                    <box-icon name="x"></box-icon>
                </div>
                <h2>Su carrito</h2>
                <div className='carrito_center'>
                    <div className='carrito_item'>
                        <img src={Card} alt="" />
                        <div>
                            <h3>Title</h3>
                            <p className='price'>€600</p>
                        </div>
                        <div>
                            <box-icon name="up-arrow" type="solid"></box-icon>
                            <p className='cantidad'>1</p>
                            <box-icon name="down-arrow" type="solid"></box-icon>
                        </div>
                        <div className='remove_item'>
                            <box-icon name="trash"> </box-icon>

                        </div>
                    </div>

                </div>
                <div className='carrito_footer'>
                    <h3>Total: 1000€</h3>
                    <button className='btn'>Payment</button>
                </div>
            </div>
        </div>
    )
}




