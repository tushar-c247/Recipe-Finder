import "../styles/RecipeDetails.scss";
import React, { useContext } from "react";
import RecipeContex from "../context/recipe/recipeContext";
import Navbar from "./Navbar";

interface ingredients {
  text: string;
  quantity: number;
  weight: number;
  image: string;
}

const RecipeDetails: React.FC<any> = () => {
  const {image, calori, label, dishType, mealType, ingredient } =
    useContext(RecipeContex);

  return (
    <>
      <Navbar />
      <div className="ingredientLines">
        <div>
          <h2 id="detailslabel">{label}</h2>
          <img id="ingrediImg" src={image} alt="wIngredientImage" />
        </div>
        <div className="listdetails">
          <p className="rectype">DishType- {dishType}</p>
          <p className="rectype">MelaType- {mealType}</p>
          <p className="rectype">Calories - {calori}</p>
          <h2 className="ingredient">Ingredients-</h2>
          {ingredient.map((ingre: ingredients, index: number) => {
            return (
              <ul key={index}>
                <img src={ingre.image} alt="ingredents" />
                <li key={index+1}>text: {ingre.text}</li>
                <li key={index+2}>quantity: {ingre.quantity}</li>
                <li key={index+3}>weight: {ingre.weight}</li>
              </ul>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RecipeDetails;