import React from 'react'
import PhoneIcon from "../../assets/icons/phone.svg";
import Menu from "../../assets/icons/menu.png";
import { IoIosCloseCircle } from "react-icons/io";
import "./Header.css";
function Header() {
  const [headerSidebar, setHeaderSidebar] = React.useState(false); 

  return (
    <div className={`header-main ${headerSidebar ? "active":""}`}>  
        <div className={`header-sidebar ${headerSidebar && 'active'}`}>
            <a>Home</a>
            <a>Category</a>
            <a>Products</a>
            <a>Blog</a>
            <a>Elements</a>
            <a onClick={()=>{setHeaderSidebar(false)}} className="header-close-circle"><IoIosCloseCircle /></a>
        </div>
        <div className='wrapper header'>
            <div className='header-navigation'>
                <a className='header-menu' onClick={()=>setHeaderSidebar(true)}><img src={Menu} /></a>
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