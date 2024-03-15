import { Link } from 'react-router-dom'
import "../styles/Navbar.scss"
import { useContext, useState } from 'react';
import { SearchOutlined } from "@ant-design/icons";
import RecipeContex from '../context/recipe/recipeContext';
import { Button, Flex } from 'antd';


const Navbar: React.FC<any> = () => {

    const contex = useContext(RecipeContex)
    const { serBar } = contex

    const [serchInp, setSerInp] = useState<string>("")

    const setSerBar = (serval: string): void => {
        serBar(serchInp)
        if(serval == "breakfast"){
            serBar("breakfast")
        }
        if(serval == "lunch"){
            serBar("lunch")
        }
        if(serval == "dinner"){
            serBar("dinner")
        }
        setSerInp("")
    }

    return (
        <>
            <div className='navbar'>
                <ul className='navul'>
                    <li className='navli'><Link className='link' to="/">Home</Link></li>
                    <li className='navli'><Link className="link" to="/about">About</Link></li>
                    <h2 className='tag'>Recipe.Finder</h2>
                    <div>
                        <input className="searchBar" value={serchInp} type="text"
                            placeholder=" Search Recipes"
                            onChange={(e) => setSerInp(e.target.value)}
                        />
                        <button className="serBtn" onClick={() => setSerBar("")}>
                            <SearchOutlined />
                        </button>
                    </div>
                </ul>
            </div>
            <div className='serIngrContainer'>
                <ul className='serinpgre'>
                    <Flex gap="small" wrap="wrap">
                        <Button onClick={() => setSerBar("breakfast")}><li>BreakFast</li></Button>
                        <Button onClick={() => setSerBar("lunch")}><li>Lunch</li></Button>
                        <Button onClick={() => setSerBar("dinner")}><li>Dinner</li></Button>
                    </Flex>
                </ul>
            </div>
        </>
    )
}


export default Navbar
