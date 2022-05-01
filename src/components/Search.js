import React, { useRef } from "react";
import { fetchSearchCocktail } from "../redux/features/cocktailSlice";
import { useDispatch } from "react-redux";

const Search = () => {
  const searchValue = useRef();
  const dispatch = useDispatch();

  const handleChange = () => {
    const searchText = searchValue.current.value;
    dispatch(fetchSearchCocktail({ searchText }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };


  return (
    <div className='card mb-4'>
      <div className='card-body'>
        <form onSubmit={handleSubmit}>
          <label>Search Cocktail</label>
          <input
            type='text'
            className='form-control'
            id='search'
            ref={searchValue}
            onChange={handleChange}
          />
        </form>
      </div>
    </div>
  )
}

export default Search
