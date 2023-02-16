// import React from 'react'
// import Portada from "../../assets/img/mark-konig.jpg"
// import { Link } from 'react-router-dom'

// export const Inicio = () => {
//     return (
//         <div className='inicio'>
//             <Link to="/" >
//                 <h1>Inicio</h1>
//             </Link>
//             <Link to='/products'>
//                 <h1>Productos</h1>
//             </Link>
//             <img src={Portada} alt='' />
//         </div>
//     )
// }



import React from "react";
import HeaderH from "../../assets/img/mark-konig.jpg";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home">
      <Link to="/"></Link>
      <Link to="/Products"></Link>
      <img className="imgHeader" src={HeaderH} alt="home" />
    </div>
  );
};

export default Home;

