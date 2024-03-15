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

    function recipeData(data: string[], img: string, calori: number, label: string, dishType: string[], mealType: string[]): void {
        setImage(img)
        setingreDetails(data)
        setCalori(calori)
        setLabel(label)
        setDishType(dishType)
        setMealType(mealType)
    }

    function serBar(serValue: string,): void {
        if (serValue !== "") {
            setSerItem(serValue)
        }
    }

    return (
        <div>
            <RecipeContex.Provider value={{recipeData, serBar, label, image, dishType, mealType, calori, ingreDetails,serItem}}>
                {props.children}
            </RecipeContex.Provider>
        </div>
    )
}



export default RecipeState