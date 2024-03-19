import "../styles/Home.scss";
import { useQuery } from "@tanstack/react-query";
import { Link} from "react-router-dom";
import { fetchData } from "../api/FetchData"
import { ChangeEvent, useContext, useState, } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import RecipeContex from "../context/recipe/recipeContext";
import Navbar from './Navbar'
import { debounce } from "lodash";
import SearchBar from "./SearchBar";

interface Recipes {
    recipe: {
        label: string;
        image: string;
        ingredientLines: string[];
        calories: number;
        dishType: string[];
        mealType: string[];
        ingredients: {
            text: string;
            quantity: number;
            weight: number
        }
    };
}

const Home: React.FC = () => {
    const context = useContext(RecipeContex)
    const { recipeData, searchItem, searchBar } = context
    
    const [searchInput, setSerchInput] = useState<string>("")

    const debouncedSearch = debounce((input: string) => {
        searchBar(input);
      }, 500);

    const { isLoading, data, error } = useQuery({
        queryKey: ["recipe", searchItem],
        queryFn: () => fetchData(searchItem),    
    });
    
    if (error) {
        return <h3>Page Not Found 404!</h3>;
    }

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSerchInput(e.target.value)
        debouncedSearch(e.target.value)
    }
    

    // const resultantData = useMemo(()=>{
    //     if(searchItem == "recipe"){
    //         return data 
    //     }
    // },[searchItem, data])


    console.log("data", data)
    
    return (
        <>
            <Navbar/>
            <SearchBar handleSearchChange={handleSearchChange} searchInput={searchInput}/>
            {isLoading ?
                <div className="cardsContainer"><CircularProgress /></div>
                : <div className="cardsContainer">
                    {data?.data.hits.map((item: Recipes, index: number) => (
                        <div className="oneCard" key={index}>
                            <div className="divlabel"><h2 className="foodlabel">{item.recipe.label}</h2></div>
                            <img className="foodimg" src={item.recipe.image} alt="Pasta" />
                            <div id="ingredientContainer">
                                <Link to="/Recipe">
                                    <button
                                        id="RecDetBtn"
                                        onClick={() => recipeData(item.recipe.ingredientLines, item.recipe.image, item.recipe.calories, item.recipe.label,
                                            item.recipe.dishType, item.recipe.mealType, item.recipe.ingredients)}
                                    >
                                        Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>}
        </>
    );
};

export default Home;