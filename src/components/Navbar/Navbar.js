import React, {useContext} from "react";
import Logo from "../../assets/img/logo.jpg";
import { DataContext } from "../Context/DataProvider";
import { Link } from "react-router-dom";


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
            <Link to="/Products">SMARTPHONES</Link>
            
          </li>
          <li>
            <Link to="/Accesories">ACCESORIES</Link>
            
          </li>
          <li>
            <Link to="/Headphones">HEADPHONES</Link>
            
          </li>
        </ul>
        <div className="cart" onClick={toogleMenu}>
          <box-icon name="cart"></box-icon>
          <span className="item_total">{carrito.length}</span>
        </div>
      </header>
  );
};


















