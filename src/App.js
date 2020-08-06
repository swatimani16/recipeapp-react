import React, {useEffect,useState} from 'react';
import './App.css';
import Recipe from './Recipe.js'

const App = () => { 
  //getting the authentication from the API
  const APP_ID = 'd2b83c08';
  const APP_KEY = "203c803a0d2d6297aabaec5aa36dc564";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query,setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  },[query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits)
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

    const getSearch = e => {
      e.preventDefault();
      setQuery(search);
      setSearch('')
    }


  return (
    <div className="App">
      <form className = "search-form" onSubmit = {getSearch}>
        <input 
        type="text"
        className = "search-bar"
        value = {search}
        onChange = {updateSearch}
        />
        <button
        type="submit"
        className ="search-button"
        >Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe 
          key = {recipe.recipe.label}
          title ={recipe.recipe.label}
          calories = {recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients = {recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
