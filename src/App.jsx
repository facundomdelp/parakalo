import React from 'react'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

function App() {
  const greet = '¡Bienvenidos a la tienda Parakaló!'
  return (
    <React.Fragment>
      <NavBar />
      <ItemListContainer greeting={greet} />
    </React.Fragment>
  )
}

export default App
