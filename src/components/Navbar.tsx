import "../styles/Navbar.scss"
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { SearchOutlined } from "@ant-design/icons";
import RecipeContex from '../context/recipe/recipeContext';
import { Button, Flex } from 'antd';

const Navbar: React.FC<any> = ({ handleSearchChange, serchInput}) => {

    const contex = useContext(RecipeContex)
    const { serchBar } = contex


    const setSearchValue = (serchBtnvalue: string): void => {
        if (serchBtnvalue == "breakfast") {
            serchBar("breakfast")
        }
        if (serchBtnvalue == "lunch") {
            serchBar("lunch")
        }
        if (serchBtnvalue == "dinner") {
            serchBar("dinner")
        }
    }

    return (
        <>
            <div className='navbar'>
                <ul className='navul'>
                    <div id='navlidiv'><li className='navli'><Link onClick={() => serchBar("Recipe")} className='link' to="/">Home</Link></li>
                        <li className='navli'><Link className="link" to="/about">About</Link></li></div>
                    <h2 className='tag'>Recipe.Finder</h2>
                    <div className='inpfieldbtn'>
                        <input className="searchBar" value={serchInput} type="text"
                            placeholder=" Search Recipes"
                            onChange={(e) => handleSearchChange(e)}
                        />
                        <button className="serBtn">
                            <SearchOutlined />
                        </button>
                    </div>
                </ul>
            </div>
            <div className='serIngrContainer'>
                <ul className='serinpgre'>
                    <Flex gap="small" wrap="wrap">
                        <Button onClick={() => setSearchValue("breakfast")}><li>BreakFast</li></Button>
                        <Button onClick={() => setSearchValue("lunch")}><li>Lunch</li></Button>
                        <Button onClick={() => setSearchValue("dinner")}><li>Dinner</li></Button>
                    </Flex>
                </ul>
            </div>            
        </>
    )
}


export default Navbar