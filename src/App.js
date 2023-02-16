// import React from "react";
// import Header from "./components/Header/Header";
// import { BrowserRouter as Router } from "react-router-dom";
// import {Paginas} from "../src/Paginas"
// import 'boxicons'

// function App() {
//   return (
//     <div className="App">
//       <Router>
//     <Header />
//    <Paginas/>
//     </Router>
//     </div>
//   );
// }

// export default App;
import React from "react";
 import { NavBar } from "./components/Navbar/Navbar";

//import { ProductsList } from "./Components/products";
import "boxicons";
import { Products } from "./components/Products/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import {DataProvider } from "./components/Context/DataProvider"
import { Carrito } from "./components/Carrito";


function App() {
  return (
    <DataProvider>
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Carrito />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
        </Routes>
      </div>
    </BrowserRouter>
    </DataProvider>
  );
}

export default App;
