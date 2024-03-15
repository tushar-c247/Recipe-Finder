import "../styles/Home.scss";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";

interface Recipes {
    recipe: {
        label: string;
        image: string;
        ingredientLines: string[];
        calories: number;
        dishType: string[];
        mealType: string[];
    };
}

const Home: React.FC<any> = (props) => {
    const { recipeData, seritem } = props

    const id = import.meta.env.VITE_API_ID;
    const key = import.meta.env.VITE_API_KEY;

    const fetchData = async () => {
        return await axios.get(
            `${import.meta.env.VITE_API}?q=${seritem}&app_id=${id}&app_key=${key}`
        );
    };

    const { isLoading, data, error } = useQuery({
        queryKey: ["recipe", seritem],
        queryFn: fetchData,
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