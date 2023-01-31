import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import {Paginas} from "../src/Paginas"
import 'boxicons'
function App() {
  return (
    <div className="App">
      <Router>
    <Header />
   <Paginas/>
    </Router>
    </div>
  );
}

export default App;
