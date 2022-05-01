import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchCocktails } from '../redux/features/cocktailSlice'

const CocktailsList = () => {
  const { cocktails, loading } = useSelector((state) => ({ ...state.app }))
  const [modifiedCocktails, setModifiedCocktails] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCocktails())
  }, [])

  useEffect(() => {
    if (cocktails) {
      const newCocktails = cocktails.map((item) => {
        const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
          item
        return {
          id: idDrink,
          name: strDrink,
          image: strDrinkThumb,
          info: strAlcoholic,
          glass: strGlass,
        }
      })
      setModifiedCocktails(newCocktails)
    } else {
      setModifiedCocktails([])
    }
  }, [cocktails])

  if (loading) {
    return <div>Loading....</div>
  }

  const renderList = modifiedCocktails.map((item) => {
    return (
      <div className='col-sm-3 mb-4' key={item.id}>
        <div className='card'>
          <img src={item.image} className='card-img-top' alt={item.name} />
          <div className='card-body'>
            <h5 className='card-title'>{item.name}</h5>
            <h6 className='card-title'>{item.glass}</h6>
            <p className='card-text'>{item.info}</p>
            <Link to={`/cocktail/${item.id}`}>
              <button className='btn btn-primary'>Details</button>
            </Link>
          </div>
        </div>
      </div>
    )
  })
  return <>{renderList}</>
}

export default CocktailsList
