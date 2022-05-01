import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Cocktail from './pages/Cocktails'
import CocktailDetails from './pages/CocktailDetails'

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className='container mt-5'>
          <Routes>
            <Route path='/' element={<Cocktail />} />
            <Route path='/cocktail/:id' element={<CocktailDetails />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
