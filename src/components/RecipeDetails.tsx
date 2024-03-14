import "../styles/RecipeDetails.scss"
import React from 'react'
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';

const RecipeDetails: React.FC<any> = (props) => {
  const { ingreDetails, image, calori, label} = props
  return (
    <div className='ingredientLines'>
      <div>
      <h2>{label}</h2>
      <img id="ingrediImg" src={image} alt="IngredientImage" /></div>
      <div className="listdetails">  
            <h4 id="calori">Calories - {calori}</h4>
            <h3 id="ingredient">Ingredients-</h3>
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