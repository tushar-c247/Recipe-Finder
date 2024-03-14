import { Link } from 'react-router-dom'
import "../styles/Navbar.scss"
import { useState } from 'react';
import { SearchOutlined } from "@ant-design/icons";

const Navbar: React.FC<any> = (props) => {
    const { serBar } = props;

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
                    <input className="searchBar" value={ser} type="text"
                        placeholder=" Search here"
                        onChange={(e) => setSer(e.target.value)}
                        />
                    <button className="serBtn" onClick={() => setSerBar()}>
                        <SearchOutlined />
                    </button>
                </ul>
            </div>

        </>
    )
}


export default Navbar