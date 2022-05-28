import React from "react";
import Header from "./components/Header/Header";
import "boxicons";
import {BrowserRouter} from "react-router-dom";
import Paginas from "./components/Paginas/Paginas";
import Carrito from "./components/Carrito/Carrito";
import Dataprovider from "./context/Dataprovider";

function App() {
  return (
      <Dataprovider>
        <div className="App">
          <BrowserRouter>
            <Header/>
            <Carrito/>
            <Paginas/>
          </BrowserRouter>
        </div>
      </Dataprovider>
  );
}

export default App;
