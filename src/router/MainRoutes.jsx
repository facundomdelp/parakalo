import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import ItemListContainer from '../components/ItemListContainer'
import ItemDetailContainer from '../components/ItemDetailContainer'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path={'/'} element={<ItemListContainer />} />
      <Route path={'/:categoria'} element={<ItemListContainer />} />
      <Route path={'/detalle/:nombre'} element={<ItemDetailContainer />} />
      <Route path={'*'} element={<Navigate to={'/'} />} />
    </Routes>
  )
}

export default MainRoutes
