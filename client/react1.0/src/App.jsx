import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './pages/login'
import Signup from './pages/signup'
import Home from './pages/Home'
import Account from './pages/Account'
import Navbar from './pages/Navbar'

const App = () => {

  const isUserSignedIn = !!localStorage.getItem('token')




  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        {isUserSignedIn && <Route path='/account' element={<Account/>}/> }
      </Routes>
    </BrowserRouter>
  )
}

export default App