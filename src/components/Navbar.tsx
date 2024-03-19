import { Link, useLocation } from 'react-router-dom'
import "../styles/Navbar.scss"
import { useContext, useState } from 'react';
import RecipeContex from '../context/recipe/recipeContext';
import { Button, Flex } from 'antd';

const Navbar: React.FC<any> = () => {
    const [activeButton, setActiveButton] = useState<string>("")
    const contex = useContext(RecipeContex)
    const { searchBar } = contex

    const location = useLocation()
    console.log("location", location)

    const setSearchBar = (serchOnButton: string): void => {
        if (serchOnButton == "breakfast") {
            searchBar("breakfast")
        }
        if (serchOnButton == "lunch") {
            searchBar("lunch")
        }
        if (serchOnButton == "dinner") {
            searchBar("dinner")
        }
        setActiveButton(serchOnButton)
    }

    return (
        <>
            <div className='navbar'>
                <ul className='navul'>
                    <div id='navlidiv'><li className='navli'><Link onClick={() => searchBar("Recipe")} className={`link ${location.pathname === "/" ? "active" : ""}`} to="/">Home</Link></li>
                        <li className='navli'><Link className={`link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link></li></div>
                    <h2 className='tag'>Recipe.Finder</h2>
                    <div className='buttons'>
                        <Flex gap="small" wrap="wrap">
                            <Button onClick={() => setSearchBar("breakfast")} className={`${activeButton === "breakfast" ? "active" : ""}`}>
                                <li>BreakFast</li>
                            </Button>
                            <Button onClick={() => setSearchBar("lunch")} className={`${activeButton === "lunch" ? "active" : ""}`}>
                                <li>Lunch</li>
                            </Button>
                            <Button onClick={() => setSearchBar("dinner")} className={`${activeButton === 'dinner' ? "active" : ""}`}>
                                <li>Dinner</li>
                            </Button>
                        </Flex>
                    </div>
                </ul>
            </div>
        </>
    )
}


export default Navbar
