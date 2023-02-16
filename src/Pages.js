// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import { Inicio } from "./components/Home";
// //import  ProductList, {} from "./components/Products/index";

// export const Paginas = () => {
//     <section>
//         <Routes>
//             <Route path="/" exact element={<Inicio />} />
//             <Route path="/productos" exact element />
//         </Routes>
//     </section>
// }

import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import { ProductsList } from "./products/Products";
import {ProductDetail} from "./products/ProductDetail"

export const Pages = () => {
  return (
    <section>
      <Route>
        <Route path="/" exact element={Home} />
        <Route path="/products" exact element={ProductsList} />
        <Route path="/product/:id" exact element={ProductDetail} />
      </Route>
    </section>
  );
};



