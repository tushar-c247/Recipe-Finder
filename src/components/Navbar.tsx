import { Link } from 'react-router-dom'
import "../styles/Navbar.scss"
// import Navicon from "../assets/Navicon.png"

const Navbar: React.FC = () => {   
    

    return (
        <>
        <div className='navbar'>
            <ul className='navul'>
                <li className='navli'><Link className='link' to="/">Home</Link></li>
                <li className='navli'><Link className="link" to="/about">About</Link></li>
                <h2 className='tag'>Recipe.Finder</h2>
                {/* <img id='navicon' src={Navicon} alt="FoodIcon" /> */}
            </ul>
        </div>
        
        </>
    )
}


export default Navbar