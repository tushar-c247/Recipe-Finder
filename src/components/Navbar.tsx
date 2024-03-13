import { Link } from 'react-router-dom'
import "../styles/Navbar.scss"
// import icon from "../assets/icon.png"
import Navicon from "../assets/Navicon.png"

const Navbar: React.FC = () => {   
    

    return (
        <>
        <div className='navbar'>
            <ul className='links'>
                <li><Link className='link' to="/">Home</Link></li>
                <li><Link className="link" to="/about">About</Link></li>
                <h2 className='tag'>Recipe.Finder</h2>
                <img id='navicon' src={Navicon} alt="FoodIcon" />
            </ul>
        </div>
        
        </>
    )
}


export default Navbar