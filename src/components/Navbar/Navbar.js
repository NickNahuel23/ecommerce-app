import React, {useContext} from "react";
import Logo from "../../assets/img/logo.jpg";
import { DataContext } from "../Context/DataProvider";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { ImUser } from "react-icons/im";
import { FiSearch } from "react-icons/fi";
import { Styles } from "./HomeNavbar.module.css";

export const NavBar = () => {
  const value = useContext(DataContext);  
  const [menu, setMenu] = value.menu;
  const [carrito] = value.carrito

  const toogleMenu = () =>{
    setMenu(!menu)
  }


  return (
      <header>
        <div className="menu">
       <box-icon name="menu"></box-icon>
        </div>
        <Link to="/">
          <div className="logo">
            <img src={Logo} alt="logo" width="66" />
          </div>
        </Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Products">Products</Link>
          </li>
        </ul>
        <div className="cart" onClick={toogleMenu}>
          <box-icon name="cart"></box-icon>
          <span className="item_total">{carrito.length}</span>
        </div>
      </header>
  );
};


// import { HiOutlineShoppingBag } from "react-icons/hi";
// import { ImUser } from "react-icons/im";
// import { FiSearch } from "react-icons/fi";

// import styles from "../../components copy/HomeNavbar/HomeNavbar.module.css"
// import { useBreakpointValue } from "@chakra-ui/react";
// import { Link, useNavigate } from "react-router-dom";
// import { BsHeartFill } from "react-icons/bs";

// const Navbar = () => {
//   const isDesktop = useBreakpointValue({ base: false, lg: true });
//   const navigate = useNavigate();
//   return (
//     <div>
//       <div className={styles.navbar}>
//         <div onClick={() => navigate("/")} className="navIcon">
//           <img
//             src="https://images.dailyobjects.com/marche/icons/logo_named.png?tr=cm-pad_resize,v-2,w-135,h-27,dpr-1"
//             alt=""
//           />
//         </div>
//         {
//           isDesktop?(
//             <div className={styles.navItems}>

//           <Link to="/newarrival"><span>NEW ARRIVALS</span></Link>
//           <Link to="/wallet"><span>WALLETS</span></Link>
//           <Link to="/desks"><span>DESKS</span></Link>
//           <Link to="/sale"><span className={styles.navItemsSale}>SALE</span></Link>
//           <Link to="/bag"><span>BAGS</span></Link>
//           <Link to="/watch"><span>WATCH</span></Link>

//         </div>
//           ):<div></div>
//         }
//         <div className={styles.navUser}>
//                 <HiOutlineShoppingBag onClick={()=>navigate("/cart")} size={25} />
//           <ImUser size={25} onClick={() =>navigate("/login")} />
//           <FiSearch size={25} />
//           <BsHeartFill size={25} onClick={()=>navigate("/wishlist")}/>
//         </div>
//       </div>
//       <img
//         src="https://images.dailyobjects.com/marche/assets/images/other/republicsale-home-page-desktop.png?tr=cm-pad_resize,v-2,w-1349,dpr-1"
//         alt=""
//       />
//     </div>
//   );
// };

// export default Navbar;



















































// export const NavBar = () => {
//   const value = useContext(DataContext);  
//   const [menu, setMenu] = value.menu;
//   const [carrito] = value.carrito

//   const toogleMenu = () =>{
//     setMenu(!menu)
//   }


//   return (
//     <div>
//       <header>
//         <a href="/">
//           <div className="logo">
//             <img src={Logo} alt="logo" width="45" />
//           </div>
//         </a>
//         <ul>
//           <li>
//             <a href="/">Home</a>
//           </li>
//           <li>
//             <a href="/Products">Products</a>
//           </li>
//         </ul>
//         <div className="cart" onClick={toogleMenu}>
//           <box-icon name="cart"></box-icon>
//           <span className="item_total">{carrito.length}</span>
//         </div>
//       </header>
//     </div>
//   );
// };

