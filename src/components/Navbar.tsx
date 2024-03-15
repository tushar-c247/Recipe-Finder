import { Link } from 'react-router-dom'
import "../styles/Navbar.scss"
import { useContext, useState } from 'react';
import { SearchOutlined } from "@ant-design/icons";
import RecipeContex from '../context/recipe/recipeContext';

const Navbar: React.FC<any> = () => {
    
    const contex = useContext(RecipeContex)
    const {serBar} = contex

    const [ser, setSer] = useState<string>("")

    const setSerBar = () => {
        serBar(ser)
        setSer("")
    }

    return (
        <>
            <div className='navbar'>
                <ul className='navul'>
                    <li className='navli'><Link className='link' to="/">Home</Link></li>
                    <li className='navli'><Link className="link" to="/about">About</Link></li>
                    <h2 className='tag'>Recipe.Finder</h2>
                    <div>
                    <input className="searchBar" value={ser} type="text"
                        placeholder=" Search here"
                        onChange={(e) => setSer(e.target.value)}
                        />
                    <button className="serBtn" onClick={() => setSerBar()}>
                        <SearchOutlined />
                    </button>
                    </div>
                </ul>
            </div>
        </>
    )
}


export default Navbar
