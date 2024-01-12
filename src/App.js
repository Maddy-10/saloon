import React from 'react'
import {  Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Branches from './screen/Branches'
import RootLayout from './layout/RootLayout'
import Entries from './screen/Entries'
import Expenses from './screen/Expenses'

const App = () => {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Branches/>} />
        <Route path='/entries'  element={<Entries/>} />
        <Route path='/expenses'  element={<Expenses/>} />
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={route} />
    </>
  )
}

export default App