import "../styles/RecipeDetails.scss"
import React, { useContext } from 'react'
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
import RecipeContex from "../context/recipe/recipeContext"

interface ingredients{
  text: string;
  quantity: number;
  weight: number
}

const RecipeDetails: React.FC<any> = () => {

  const { ingreDetails, image, calori, label, dishType, mealType, ingredient} = useContext(RecipeContex)
  console.log("recipedetails",ingredient)
  return (
    <div className='ingredientLines'>
      <div>
      <h2 id="detailslabel">{label}</h2>
      <img id="ingrediImg" src={image} alt="wIngredientImage" /></div>
      <div className="listdetails">  
            <p className="rectype">DishType- {dishType}</p>
            <p className="rectype">MelaType- {mealType}</p>
            <p className="rectype">Calories - {calori}</p>
            <h2 className="ingredient">Ingredients-</h2>
            {ingreDetails?.map((item: string, ind: number) => {
        return <ul key={ind} className="recUl"><li style={{ color: 'black' }} key={ind}>{item}</li></ul>
      })}
      {ingredient?.map((ingre: ingredients, index: number)=>{
          <ul key={index}><li key={index}>val{ingre.text}</li></ul>
      })}
      </div>
    </div>
  )
}

export default RecipeDetails

{/* <Card className="card" sx={{ maxWidth: 400}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="80%"
            image={image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Ingredients-
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {console.log()}
              {ingreDetails?.map((item: string, ind: number) => {
                return <li style={{ color: 'black' }} key={ind}>{item}</li>
              })}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card> */}