import axios from "axios"
import { useQuery } from "@tanstack/react-query";
import "../styles/Home.scss"
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from 'antd';


interface Recipes {
    recipe: {
        label: string;
        image: string
        ingredientLines: string[]
    }
}


const Fetch = () => {
    const id = import.meta.env.VITE_API_ID 
    const key = import.meta.env.VITE_API_KEY
    const fetchData = async () => {
        return await axios.get(`${import.meta.env.VITE_API}?q=recipe&app_id=${id}&app_key=${key}`)
    }

    const { isLoading, data, error } = useQuery({ queryKey: ['recipe'], queryFn: fetchData })

    console.log("data", data)
    if (isLoading) {
        return <Spin indicator={<LoadingOutlined className="Spiner" spin />} />
    }
    if (error) {
        return <h3>Error 404!</h3>
    }

    // console.log(post, "post");
    return (
        <>
        <div className="cardsContainer">
             {
                data?.data.hits.map((item: Recipes, index: number) => (
                    <div className="card-1" key={index} >
                        <h2 className="foodlabel">{item.recipe.label}</h2>
                        <img className="foodimg" src={item.recipe.image} alt="Pasta" />
                        <div id="ingredientContainer" >
                        {item.recipe.ingredientLines.map((ingre, ind: number)=>{
                            return <p id="ingredientLines" key={ind}>{ingre}</p>
                        })}
                        </div>
                    </div>
                )
                )}
        </div>
        </>
    )




}

export default Fetch