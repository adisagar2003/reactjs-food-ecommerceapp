import React from 'react'
import PhoneIcon from "../../assets/icons/phone.svg";
import Menu from "../../assets/icons/menu.png";
import "./Header.css";
function Header() {
  return (
    <div className='header-main'>
        <div className='wrapper header'>
            <div className='header-navigation'>
                <a className='header-menu'><img src={Menu} /></a>
                <div className='header-navitems'>
                    <a>Home</a>
                    <a>Category</a>
                    <a>Products</a>
                    <a>Blog</a>
                    <a>Elements</a>
                </div>
                <div>
                    <img src={PhoneIcon}  />
                    <span className=''>+ 123 ( 456 ) ( 7890 )</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header