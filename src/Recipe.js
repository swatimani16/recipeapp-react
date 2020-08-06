import React from 'react';
import style from './recipe.module.css';
const Recipe = ({title,calories,image,ingredients}) => {
    return (
        <div className={style.recipe}>
        <h1>{title}</h1>
        <h4>{calories}</h4>
        <img className={style.image} src ={image} alt ="" />
        <ol>
            {ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
            ))}
        </ol>
        </div>
    )
}


export default Recipe;