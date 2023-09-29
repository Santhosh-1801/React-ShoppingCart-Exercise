import React from 'react'
import { Link } from 'react-router-dom' 
import "../src/style.css"

const Header = () => {
  return ( 
    <div>
         <span>
        <ul className='nav'>
            <li className='prod'>
                <Link to='/' >
                    Home Page
                </Link>
            </li>
            <li className='prod1' >
                <Link to='/shoppingcart' >
                    Shopping Cart
                </Link>
            </li>
        </ul>
    </span>
    </div>
  )
}

export default Header