import React from "react";
import Header from "./components/Header/Header";
import {BrowserRouter} from "react-router-dom";
import Paginas from "./components/Paginas/Paginas";
import Carrito from "./components/Carrito/Carrito";
import Dataprovider from "./context/Dataprovider";

function App() {
  return (
    <div>
      <Dataprovider>
        <BrowserRouter>
          <Header/>
          <Carrito/>
          <Paginas/>
        </BrowserRouter>
      </Dataprovider>
    </div>
  );
}

export default App;
