import React from 'react'
import {Routes, Route} from "react-router-dom"
import Sidebar from './sidebar'


function Navrouter() {
  return (
   <Routes>
    <Route path='/' index element={< Sidebar />}/>
    <Route path='/Sidebar' element={<Sidebar />}/>

   </Routes>
  )
}``

export default Navrouter