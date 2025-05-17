import React from 'react';
import "./NavBar.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';

import { Link } from 'react-router-dom';

//Context
import { SalesContext } from '../../context/salesContext';

const NavBar = () => {
  const {sales} = useContext(SalesContext);
  return (
    <div className='NavBar'>
        <nav>
            <ul>
                <Link to={"/"}>Pagina principal</Link>
                <Link to={"/category/periferico"}>Periferico</Link>
                <Link to={"/category/cpus"}>cpus</Link>
                <Link to={"/shop"} className='li-sales'><ShoppingCartIcon/> {sales}</Link>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar