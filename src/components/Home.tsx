import "../styles/Home.scss";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import {fetchData} from "../api/FetchData"
import { useContext } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import RecipeContex from "../context/recipe/recipeContext";

interface Recipes {
    recipe:{
        label: string;
        image: string;
        ingredientLines: string[];
        calories: number;
        dishType: string[];
        mealType: string[];
    };
}

const Home: React.FC<any> = () => {
    const context = useContext(RecipeContex)
    const {recipeData, serItem} = context

    const { isLoading, data, error } = useQuery({
        queryKey: ["recipe", serItem],
        queryFn: () => fetchData(serItem),
    });

    console.log("data", data);
    if (isLoading) {
        return <div className="cardsContainer"><CircularProgress /></div>;
    }
    if (error) {
        return <h3>Error 404!</h3>;
    }

    return (
        <>
            <div className="cardsContainer">
                {data?.data.hits.map((item: Recipes, index: number) => (
                    <div className="oneCard" key={index}>
                        <h2 className="foodlabel">{item.recipe.label}</h2>
                        <img className="foodimg" src={item.recipe.image} alt="Pasta" />
                        <div id="ingredientContainer">
                            <Link to="/Recipe">
                                <button
                                    id="RecDetBtn"
                                    onClick={() => recipeData(item.recipe.ingredientLines, item.recipe.image, item.recipe.calories, item.recipe.label,
                                        item.recipe.dishType, item.recipe.mealType)}
                                >
                                    Details
                                </button>
                            </Link>
                            {/* {item.recipe.ingredientLines.map((ingre: string, ind: number) => {
                                    return <p id="ingredientLines" key={ind}>{ingre}</p>
                                })} */}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Home;