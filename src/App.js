import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import { Home,SingleProduct,Cart, Checkout, Error, About,Products, PrivateRoute, AuthWrapper } from './pages'

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/about' element={ <About/>}/>
          <Route exact path='/cart' element={ <Cart/>} />
          <Route exact path='/products' element={<Products/>} />
          <Route exact path='/products/:id' children={<SingleProduct />} />
          <Route exact path='/checkout' children={
            <PrivateRoute >
              <Checkout/>
            </PrivateRoute>
          } />
          <Route path="*" element={<Error />} /> 
        </Routes>
        <Footer />
      </Router>
    </AuthWrapper>  
  )
}
export default App
