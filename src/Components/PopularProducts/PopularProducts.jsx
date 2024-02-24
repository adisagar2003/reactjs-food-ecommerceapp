import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./PopularProducts.css";

function Products(props) {

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="popular-products">
        <div className="wrapper">
            <div className="pp-main">
                <div className="pp-navbar">
                    <h3>{props.heading}</h3>
                    <div className="pp-nav-items">
                        {props?.navlinks?.map((elem, i) =>{
                            return (<a  key={i} className={activeIndex == i && "active-link"} onClick={()=>setActiveIndex(i)}>{elem}</a>)
                        })}
                    </div>
                </div>
                <div className="pp-grid-items">
                        {props.productsToShow.map((elem, i)=>{
                            console.log(props.productsToShow);
                        return (<ProductCard ownerColor={elem.ownerColor} foodName={elem.foodName} foodType={elem.foodType} rating={elem.rating} owner={elem.owner} price={elem.price} orignalPrice={elem.orignalPrice} />)
                    })}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Products