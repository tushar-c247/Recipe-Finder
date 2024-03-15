import "../styles/RecipeDetails.scss"
import React, { useContext } from 'react'
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
import RecipeContex from "../context/recipe/recipeContext"

const RecipeDetails: React.FC<any> = () => {

  const { ingreDetails, image, calori, label, dishType, mealType} = useContext(RecipeContex)

  return (
    <div className='ingredientLines'>
      <div>
      <h2 id="detailslabel">{label}</h2>
      <img id="ingrediImg" src={image} alt="wIngredientImage" /></div>
      <div className="listdetails">  
            <p className="rectype">DishType- {dishType}</p>
            <p className="rectype">MelaType- {mealType}</p>
            <p  className="rectype">Calories - {calori}</p>
            <p  className="ingredient">Ingredients-</p>
            {ingreDetails?.map((item: string, ind: number) => {
        return <ul key={ind} className="recUl"><li style={{ color: 'black' }} key={ind}>{item}</li></ul>
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