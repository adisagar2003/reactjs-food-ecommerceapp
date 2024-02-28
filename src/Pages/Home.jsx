import Header from '../Components/Header/Header'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import Products from '../Components/PopularProducts/PopularProducts'
import Contact from '../Components/ContactForm/Contact'
import Footer from '../Components/Footer/Footer'

function Home() {
  return (
    <div>
        <Header />
        <Navbar />
        <Hero />
        <Products />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home