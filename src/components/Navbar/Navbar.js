// import React from 'react'
// import logo from "../../assets/img/logo.jpg"
// import { Link } from "react-router-dom"


// export const Header = () => {
//   return (
//     <header>
//       <Link to='/'>
//         <div className='logo'>
//           <img src={logo} alt='' />
//         </div>
//       </Link>
//       <ul>
//         <li>
//           <Link to="/">INICIO</Link>
//         </li>
//         <li>
//           <Link to="/productos">PRODUCTOS</Link>
//         </li>
//       </ul>
//       <div className='cart'>
//         <box-icon name="cart"></box-icon>
//         <span className='item__total'>0</span>
//       </div>
//     </header>
//   )
// }

// export default Header
import React from "react";
import Logo from "../../assets/img/logo.jpg";

export const NavBar = () => {
  return (
    <div>
      <header>
        <a href="/">
          <div className="logo">
            <img src={Logo} alt="logo" width="45" />
          </div>
        </a>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/Products">Products</a>
          </li>
        </ul>
        <div className="cart">
          <box-icon name="cart"></box-icon>
          <span className="item__total">0</span>
        </div>
      </header>
    </div>
  );
};

