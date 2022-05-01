import React from 'react'
import CocktailsList from '../components/CocktailsList'
import Search from '../components/Search'

const Cocktail = () => {
  return (
    <div>
      <Search />
      <div className='row'>
        <CocktailsList />
      </div>
    </div>
  )
}

export default Cocktail
