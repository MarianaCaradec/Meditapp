import React from 'react'
import './NavBar.css'
import {Link} from 'react-router-dom'
import logo from '../../assets/logo.png'

export const NavBar = () => {
    return (
        <div className='navegacion'>
            <Link className='logo' to={'/'}><h1>Meditapp <img src={logo} alt="logo"/></h1> </Link>
            <Link className='link' to={'/informacion'}><h2>Qué es la meditación</h2></Link>
        </div>
    )
}