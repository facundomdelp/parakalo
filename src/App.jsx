import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </React.Fragment>
  )
}

export default App
