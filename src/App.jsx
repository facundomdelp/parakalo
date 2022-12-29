import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  const [productos, setProductos] = useState([]);

  return (
    <React.Fragment>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenidos a la tienda Parakaló!" />
    </React.Fragment>
  );
}

export default App;
