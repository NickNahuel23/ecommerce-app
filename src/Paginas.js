import React from "react";
import { Routes, Route } from "react-router-dom";
import { Inicio } from "./components/Inicio";
import ProductList, { } from "./components/Products/index";

export const Paginas = () => {
    <section>
        <Routes>
            <Route path="/" exact component={Inicio} />
            <Route path="/productos" exact component={ProductList} />
        </Routes>
    </section>
}

