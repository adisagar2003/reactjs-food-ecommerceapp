import "./Navbar.css";
import SearchIcon from "../../assets/icons/search.svg";
import PersonIcon from "../../assets/icons/person.svg";
import HeartIcon from "../../assets/icons/heart.svg";
import CartIcon from "../../assets/icons/cart.svg";
import NavbarLogo from "../../assets/icons/navbar-logo.png";
function Navbar() {
  return (
    <div className="navbar">
        <div className='wrapper'>
            <div className='navbar-main'>
                <div className="navbar-logo">
                    <img src={NavbarLogo} />
                </div>
                <div className="navbar-search">
                    <input type="text" placeholder='Search for items...' />
                    <button><img src={SearchIcon} /></button>
                </div>
                <div className="navbar-icons">
                    <div>
                        <span><img src={PersonIcon} /></span>
                        <span>Account</span>
                    </div>
                    <div>
                        <span><img src={HeartIcon} /></span>
                        <span>Wishlist</span>
                    </div>
                    <div>
                        <span><img src={CartIcon} /></span>
                        <span>Cart</span>
                    </div>
                </div>
                <button className="navbar-responsive-button"></button>
            </div>
        </div>
    </div>
  )
}

export default Navbar