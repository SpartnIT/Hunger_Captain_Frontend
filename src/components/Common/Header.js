import React from 'react'
import mainImg from '../../assets/img/main.png';
import logo from '../../assets/img/Hunger-Captian-white.png'
import designImg from '../../assets/img/Group 1390.png'

const Header = () => {
  return (
        <header>
        <img className="main" src={mainImg} alt="" />
        <img className="icon-hungar" src={logo} alt="" />
        <div className="text">
            <h2>Good food is</h2>
            <h2>The Foundation of</h2>
            <h1>GENUINE HAPPINESS</h1>
        </div>
        <img className="design" src={designImg} alt="" />
    </header>
  )
}

export default Header