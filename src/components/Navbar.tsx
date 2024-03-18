import { Link } from 'react-router-dom'
import "../styles/Navbar.scss"
import { useContext } from 'react';
import RecipeContex from '../context/recipe/recipeContext';
import { Button, Flex } from 'antd';

const Navbar: React.FC<any> = () => {

    const contex = useContext(RecipeContex)
    const { searchBar } = contex


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
    }

    return (
        <>
            <div className='navbar'>
                <ul className='navul'>
                    <div id='navlidiv'><li className='navli'><Link onClick={() => searchBar("Recipe")} className='link' to="/">Home</Link></li>
                        <li className='navli'><Link className="link" to="/about">About</Link></li></div>
                    <h2 className='tag'>Recipe.Finder</h2>
                    <div className='buttons'>
                        <Flex gap="small" wrap="wrap">
                            <Button onClick={() => setSearchBar("breakfast")}><li>BreakFast</li></Button>
                            <Button onClick={() => setSearchBar("lunch")}><li>Lunch</li></Button>
                            <Button onClick={() => setSearchBar("dinner")}><li>Dinner</li></Button>
                        </Flex>
                    </div>
                </ul>
            </div>
        </>
    )
}


export default Navbar
