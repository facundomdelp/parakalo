import React from 'react'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <ItemListContainer greeting='¡Bienvenidos a la tienda Parakaló!' />
    </React.Fragment>
  )
}

export default App
