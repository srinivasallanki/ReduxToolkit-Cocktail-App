import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchSingleCocktail } from '../redux/features/cocktailSlice'
import { useDispatch, useSelector } from 'react-redux'

const CocktailDetails = () => {
  const { cocktail, loading } = useSelector((state) => ({ ...state.app }))
  const [modifiedCocktail, setModifiedCocktail] = useState([])
  const dispatch = useDispatch()
  const { id } = useParams()
  useEffect(() => {
    dispatch(fetchSingleCocktail({ id }))
  }, [id])

  useEffect(() => {
    if (cocktail.length > 0) {
      const {
        strDrink: name,
        strDrinkThumb: image,
        strAlcoholic: info,
        strCategory: category,
        strGlass: glass,
        strInstructions: instructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      } = cocktail[0]
      const ingredients = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      ]
      console.log('ingredients', ingredients)
      const newCocktail = {
        name,
        image,
        info,
        category,
        glass,
        instructions,
        ingredients,
      }
      setModifiedCocktail(newCocktail)
    } else {
      setModifiedCocktail(null)
    }
  }, [id, cocktail])
  if (!modifiedCocktail) {
    return <h2 className='section-title'>No Cocktail to Display</h2>
  } else {
    const { name, image, category, info, glass, instructions, ingredients } =
      modifiedCocktail
    return (
      <div className='row'>
        <div className='col-sm-6'>
          <img src={image} alt={name} className='img-fluid' />
        </div>
        <div className='col-sm-6'>
          <h1>{name}</h1>
          <h3>{category}</h3>
          <p>{info}</p>
          <p>{instructions}</p>
          <p>{glass}</p>
          <p>{ingredients}</p>
        </div>
      </div>
    )
  }
}

export default CocktailDetails
