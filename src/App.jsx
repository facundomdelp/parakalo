import React, { useState } from "react";
import NavBar from "./components/NavBar";

function App() {
  const [productos, setProductos] = useState([]);

  return (
    <React.Fragment>
      <NavBar />
    </React.Fragment>
  );
}

export default App;
