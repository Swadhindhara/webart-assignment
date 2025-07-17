import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { EmailVerify, Home, Login, Register, UserDetails} from './pages'
import { Footer, Header } from './_components'
import { Toaster } from "@/components/ui/sonner"

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Toaster/>
      <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/signup' element={<Register />}/>
          <Route path='/email-verification' element={<EmailVerify />}/>
          <Route path='/signin' element={<Login />}/>
          <Route path='/user-details/:id' element={<UserDetails />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App