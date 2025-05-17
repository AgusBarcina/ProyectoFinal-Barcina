import React from 'react'
import img from "../../assets/logo.png"
import "./Header.css";

const Header = () => {
  return (
    <div className='Header'>
        <img src={img} alt="logo del e-comerce" />
        <span></span>
        <h1>Compra Gamer</h1>
    </div>
  )
}

export default Header