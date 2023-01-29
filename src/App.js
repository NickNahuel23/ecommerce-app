import React from "react";
import ProductList from "./components/Products";
import Header from "./components/Header/Header";
import 'boxicons'
function App() {
  return (
    <div className="App">
    <Header />
    <ProductList />
    </div>
  );
}

export default App;
