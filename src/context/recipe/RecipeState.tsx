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
    const [ingredient, setIngrediet] = useState<string[]>([])
    const [searchItem, setSerchItem] = useState<string>("recipe")

    function recipeData(data: string[], img: string, calori: number, label: string, dishType: string[], mealType: string[], ingredient: string[]): void {
        setLabel(label)
        setImage(img)
        setDishType(dishType)
        setMealType(mealType)
        setCalori(calori)
        setingreDetails(data)
        setIngrediet(ingredient)
    }

    function searchBar(searchValue: string,): void {
        if (searchValue !== "") {
            setSerchItem(searchValue)
        }
    }

    return (
        <div>
            <RecipeContex.Provider value={{recipeData, searchBar, label, image, dishType, mealType, calori, ingreDetails, searchItem, ingredient}}>
                {props.children}
            </RecipeContex.Provider>
        </div>
    )
}



export default RecipeState