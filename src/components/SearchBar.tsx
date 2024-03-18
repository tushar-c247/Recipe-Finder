import "../styles/SearchBar.scss"
import React from 'react'
import { SearchOutlined } from "@ant-design/icons";

const SearchBar: React.FC<any> = ({ handleSearchChange, searchInput }) => {
    return (
        <div className='searchdiv'> 
                <input className="inputfield" value={searchInput} type="text"
                    placeholder=" Search Recipes"
                    onChange={(e) => handleSearchChange(e)}
                />
                <button className="searchBtn">
                    <SearchOutlined />
                </button>
        </div>
    )
}

export default SearchBar