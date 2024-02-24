import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Products from './Components/PopularProducts/PopularProducts'
import Contact from './Components/ContactForm/Contact'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <Navbar />
        <Hero />
        <Products heading="Popular Products" navlinks={["All","Milk and Dairies","Coffee & Teas","Pet foods","Meats", "Vegetables", "Fruits"]} productsToShow={[{ownerColor:"red" ,foodName:"Fresh organic villa farm lemon 500gm pack", foodType:"Snack", rating:4, owner:"NestFood", price:28.85, orignalPrice:34.44},{ownerColor:"red" ,foodName:"Fresh organic villa farm lemon 500gm pack", foodType:"Snack", rating:4, owner:"NestFood", price:28.85, orignalPrice:34.44},{ownerColor:"red" ,foodName:"Fresh organic villa farm lemon 500gm pack", foodType:"Snack", rating:4, owner:"NestFood", price:28.85, orignalPrice:34.44},{ownerColor:"red" ,foodName:"Fresh organic villa farm lemon 500gm pack", foodType:"Snack", rating:4, owner:"NestFood", price:28.85, orignalPrice:34.44}, {ownerColor:"red" ,foodName:"Fresh organic villa farm lemon 500gm pack", foodType:"Snack", rating:4, owner:"NestFood", price:28.85, orignalPrice:34.44},{ownerColor:"red" ,foodName:"Fresh organic villa farm lemon 500gm pack", foodType:"Snack", rating:4, owner:"NestFood", price:28.85, orignalPrice:34.44}, {ownerColor:"red" ,foodName:"Fresh organic villa farm lemon 500gm pack", foodType:"Snack", rating:4, owner:"NestFood", price:28.85, orignalPrice:34.44}, {ownerColor:"red" ,foodName:"Fresh organic villa farm lemon 500gm pack", foodType:"Snack", rating:4, owner:"NestFood", price:28.85, orignalPrice:34.44}]} />
        <Products heading="Top Picks" navlinks={["Featured","Customer's Favourite","Sponsored"]} productsToShow={[{ownerColor:"red" ,foodName:"Fresh organic villa farm lemon 500gm pack", foodType:"Snack", rating:4, owner:"NestFood", price:28.85, orignalPrice:34.44},{ownerColor:"red" ,foodName:"Fresh organic villa farm lemon 500gm pack", foodType:"Snack", rating:4, owner:"NestFood", price:28.85, orignalPrice:34.44},{ownerColor:"red" ,foodName:"Fresh organic villa farm lemon 500gm pack", foodType:"Snack", rating:4, owner:"NestFood", price:28.85, orignalPrice:34.44},{ownerColor:"red" ,foodName:"Fresh organic villa farm lemon 500gm pack", foodType:"Snack", rating:4, owner:"NestFood", price:28.85, orignalPrice:34.44}, {ownerColor:"red" ,foodName:"Fresh organic villa farm lemon 500gm pack", foodType:"Snack", rating:4, owner:"NestFood", price:28.85, orignalPrice:34.44},{ownerColor:"red" ,foodName:"Fresh organic villa farm lemon 500gm pack", foodType:"Snack", rating:4, owner:"NestFood", price:28.85, orignalPrice:34.44}, {ownerColor:"red" ,foodName:"Fresh organic villa farm lemon 500gm pack", foodType:"Snack", rating:4, owner:"NestFood", price:28.85, orignalPrice:34.44}, {ownerColor:"red" ,foodName:"Fresh organic villa farm lemon 500gm pack", foodType:"Snack", rating:4, owner:"NestFood", price:28.85, orignalPrice:34.44}]} />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
