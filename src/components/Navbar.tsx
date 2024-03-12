import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../styles/Navbar.scss"
import { SearchOutlined } from '@ant-design/icons'

const Navbar: React.FC = () => {
    const [serInp, setSerInp] = useState<string>("")

    function inputData() {
        console.log(serInp)
        setSerInp("")
    }


    return (
        <div className='navbar'>
            <ul className='links'>
                <li><Link className='link' to="/">Home</Link></li>
                <li><Link className="link" to="/about">About</Link></li>
                <h2 className='tag'>Recipe.Finder</h2>
                <input className='searchBar' value={serInp} type="text" placeholder='Search here' onChange={(e) => setSerInp(e.target.value)} />
                <button className='serBtn' onClick={inputData}><SearchOutlined /></button>
            </ul>
        </div>
    )
}


export default Navbar