import "../styles/Home.scss";
import { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { SearchOutlined } from "@ant-design/icons";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";

interface Recipes {
    recipe: {
        label: string;
        image: string;
        ingredientLines: string[];
    };
}

const Home: React.FC<any> = (props) => {
    // console.log("ww", props);

    const [serInp, setSerInp] = useState<string>("");
    const [searchQuery, setSearchQuery] = useState<string>("recipe");

    function inputData() {
        setSearchQuery(serInp);
        setSerInp("");
    }

    const id = import.meta.env.VITE_API_ID;
    const key = import.meta.env.VITE_API_KEY;
    const fetchData = async () => {
        return await axios.get(
            `${import.meta.env.VITE_API}?q=${searchQuery}&app_id=${id}&app_key=${key}`
        );
    };

    const { isLoading, data, error } = useQuery({
        queryKey: ["recipe", searchQuery],
        queryFn: fetchData,
    });

    console.log("data", data);
    if (isLoading) {
        return <CircularProgress className="Spiner" />;
    }
    if (error) {
        return <h3>Error 404!</h3>;
    }


    return (
        <>
            <div>
                <input
                    className="searchBar"
                    value={serInp}
                    type="text"
                    placeholder="Search here"
                    onChange={(e) => setSerInp(e.target.value)}
                />
                <button className="serBtn" onClick={inputData}>
                    <SearchOutlined />
                </button>
            </div>
            <div className="cardsContainer">
                {data?.data.hits.map((item: Recipes, index: number) => (
                    <div className="card-1" key={index}>
                        <h2 className="foodlabel">{item.recipe.label}</h2>
                        <img className="foodimg" src={item.recipe.image} alt="Pasta" />
                        <div id="ingredientContainer">
                            <Link to="/Recipe">
                                <button
                                    id="RecDetBtn"
                                    onClick={() => props.recipeData(item.recipe.ingredientLines)}
                                >
                                    Recipe Details
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
