import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const RecipeDetails: React.FC<any> = (props) => {

  return (
    <div className='ingredientLines'>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {console.log()}
          {props.ingreDetails?.map((item: string, ind: number)=>{
            return <ul><li style={{color: 'black'}} key={ind}>{item}</li></ul>
        })}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  )
}

export default RecipeDetails