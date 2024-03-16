import "../styles/RecipeDetails.scss"
import React, { useContext } from 'react'
import RecipeContex from "../context/recipe/recipeContext"
import Navbar from "./Navbar"
// interface ingredients{
//   text: string;
//   quantity: number;
//   weight: number
// }

const RecipeDetails: React.FC<any> = () => {

  const { ingreDetails, image, calori, label, dishType, mealType} = useContext(RecipeContex)
  // console.log("recipedetails",ingredient)
  return (
    <>
      <Navbar/>
      <div className='ingredientLines'>
        <div>
          <h2 id="detailslabel">{label}</h2>
          <img id="ingrediImg" src={image} alt="wIngredientImage" />
        </div>
        <div className="listdetails">
          <p className="rectype">DishType- {dishType}</p>
          <p className="rectype">MelaType- {mealType}</p>
          <p className="rectype">Calories - {calori}</p>
          <h2 className="ingredient">Ingredients-</h2>
          {ingreDetails?.map((item: string, ind: number) => {
            return <ul key={ind} className="recUl"><li style={{ color: 'black' }} key={ind}>{item}</li></ul>
          })}
         {/* {ingredient.map((ingre: ingredients, index: number)=>{
          {console.log("ahsdb", ingre)}
        return  <ul key={index}><li key={index}>{ingre.text}</li></ul>
      })}  */}
        </div>
      </div>
    </>
  )
}

export default RecipeDetails

