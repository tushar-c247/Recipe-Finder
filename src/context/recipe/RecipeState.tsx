import React, { useState, ReactNode } from 'react'
import RecipeContex from './recipeContext'

interface RecipeStateProps {
    children: ReactNode;
}

const RecipeState: React.FC<RecipeStateProps> = (props) => {

    const [label, setLabel] = useState<string>("")
    const [image, setImage] = useState<string>("")
    const [dishType, setDishType] = useState<string[]>([])
    const [mealType, setMealType] = useState<string[]>([])
    const [calori, setCalori] = useState<number>()
    const [ingreDetails, setingreDetails] = useState<string[]>([])
    const [serItem, setSerItem] = useState<string>("recipe")
    const [ingredient, setIngrediet] = useState<string[]>([])
    console.log("igredents", ingredient)

    function recipeData(data: string[], img: string, calori: number, label: string, dishType: string[], mealType: string[], ingredient: string[]): void {
        setImage(img)
        setingreDetails(data)
        setCalori(calori)
        setLabel(label)
        setDishType(dishType)
        setMealType(mealType)
        setIngrediet(ingredient)
    }

    function serchBar(serValue: string,): void {
        if (serValue !== "") {
            setSerItem(serValue)
        }
    }

    return (
        <div>
            <RecipeContex.Provider value={{recipeData, serchBar, label, image, dishType, mealType, calori, ingreDetails, serItem, ingredient}}>
                {props.children}
            </RecipeContex.Provider>
        </div>
    )
}



export default RecipeState