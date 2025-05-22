import React from 'react'
import './Weather.css'
import { CiSearch } from "react-icons/ci";

const Weather = () => {
  return (
    <div className='weather'>
        <div className="search-bar">
            <input type="text" placeholder='search'/><CiSearch className='search-icon'/>
        </div>
    </div>
  )
}

export default Weather