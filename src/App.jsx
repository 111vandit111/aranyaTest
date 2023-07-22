import Navbar from './components/navbar/Navbar'
import './App.css'
import Hero from './components/hero/Hero'
import Footer from './components/footer/Footer'
import DetailBox from './components/detailBox/DetailBox'
import AboutUs from './components/aboutUs/AboutUs'
import WWO from './components/offer/WWO'
import Gallery from './components/gallery/Gallery'
import OfferGallery from './components/offerGallery/OfferGallery'
import Contact from './components/contactUs/Contact'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <DetailBox />
      <AboutUs /> {/* Will contain dea=tails of villa */}

      <Gallery /> { /* Only villa images , interior and mud bath and other stuff */}

      <WWO /> { /* 4 key highlights and other stuff */}
      <OfferGallery />
      <Contact />
      <Footer />
    </>
  )
}

export default App
