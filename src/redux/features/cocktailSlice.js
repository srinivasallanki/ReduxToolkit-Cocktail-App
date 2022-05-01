import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

//Action for Get Cocktails
export const fetchCocktails = createAsyncThunk(
  'cocktails/fetchCocktails',
  async () => {
    return fetch(
      'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
    ).then((res) => res.json())
  }
)

//Action for Single Cocktail
export const fetchSingleCocktail = createAsyncThunk(
  'cocktails/fetchSingleCocktail',
  async ({ id }) => {
    return fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    ).then((res) => res.json())
  }
)

//Action for Search
export const fetchSearchCocktail = createAsyncThunk(
  "cocktails/fetchSearchCocktail",
  async ({ searchText }) => {
    return fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`
    ).then((res) => res.json());
  }
);
const cocktailSlice = createSlice({
  name: 'cocktails',
  initialState: {
    cocktails: [],
    cocktail: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchCocktails.pending]: (state) => {
      state.loading = true
    },
    [fetchCocktails.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.cocktails = payload.drinks
    },
    [fetchCocktails.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },

    [fetchSingleCocktail.pending]: (state, action) => {
      state.loading = true
    },
    [fetchSingleCocktail.fulfilled]: (state, action) => {
      state.loading = false
      state.cocktail = action.payload.drinks
    },
    [fetchSingleCocktail.rejected]: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    [fetchSearchCocktail.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchSearchCocktail.fulfilled]: (state, action) => {
      state.loading = false;
      state.cocktails = action.payload.drinks;
    },
    [fetchSearchCocktail.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
})

export const cocktailReducer = cocktailSlice.reducer
