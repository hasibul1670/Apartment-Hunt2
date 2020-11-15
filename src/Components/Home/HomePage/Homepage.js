import React from 'react'
import Header from '../Header/Header'
import Navbar from '../../Shared/Navbar/Navbar'
import './HomePage.css';
function Homepage() {
    return (
        <div className="home-main ">
            <Navbar></Navbar>
                <Header></Header>
        </div>
    )
}

export default Homepage
