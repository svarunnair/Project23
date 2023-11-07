import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from '../Pages/Signup'
import Signin from '../Pages/Signin'
import Home from '../Pages/Home'
import Payment from '../Pages/Payment'
import Movie from '../Pages/Movie'

function MainRoutes() {
  let token=localStorage.getItem("token")
  return (
    <div>
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/home' element={token&&<Home/>}/>
        <Route path='/payment' element={token&&<Payment/>}/>
        <Route path='/movie' element={token&&<Movie/>}/>


      </Routes>
    </div>
  )
}

export default MainRoutes