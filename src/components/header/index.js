import React from 'react'
import { Link } from 'react-router-dom'

import './header.css'
import NASAlogo from '../../components/images/NASA_logo.svg'

const Header = () => 
<div className="header">
<Link to='/'><img src={NASAlogo} alt="Nasa logo" height="70px"/></Link>
    
</div>


export default Header