import axios from "axios"
import { useQuery } from "@tanstack/react-query";

interface Ingredients{
    food: string;
    
}
interface Recipes {
    recipe: {
        label: string;
        image: string
        ingredients: Ingredients[]
    }
}

const Fetch = () => {

    const fetchData = async () => {
        return await axios.get(`https://api.edamam.com/search?q=pasta&app_id=bfe555d6&app_key=592368c606b459b6da30450e9c1929ed`)
    }

    const {isLoading, data, error} = useQuery({queryKey: ['recipe'], queryFn: fetchData})

    console.log("data", data)
    if(isLoading){
        return <h3>Loading....</h3>
    }
    if(error){
        return <h3>Error 404!</h3>
    }

    // console.log(post, "post");
    return (
        <div id="cards">
            {
                data?.data.hits.map((item: Recipes, index: number) => (
                    <div key={index} >
                        <h2>{item.recipe.label}</h2>
                        <img src={item.recipe.image} alt="Pasta" />
                        <p>{item.recipe.ingredients}</p>
                    </div>
                )
                )}
        </div>
    )




}

export default Fetch