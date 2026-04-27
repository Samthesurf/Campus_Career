import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import About from './components/About'
import PartnersTicker from './components/PartnersTicker'
import FloatingMascot from './components/FloatingMascot'
import Speakers from './components/Speakers'
import Activities from './components/Activities'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import SeoMeta from './components/SeoMeta'
import Register from './pages/Register'
import ThankYou from './pages/ThankYou'
import Admin from './pages/Admin'
import AboutV2 from './pages/AboutV2'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-container">
      <SeoMeta />
      <Navbar />

      <Routes>
        <Route path="/" element={
          <main>
            <Hero />
            <PartnersTicker />

            {/* Animated and Coherent Wrapper for the bottom part */}
            <div className="lively-section-wrapper">
              {/* Seamless Premium Ambient Background */}
              <div className="ambient-glow-bg"></div>
              <div className="ambient-noise"></div>

              <div className="lively-content-pane">
                <Highlights />
                <About />
                <Speakers />
                <Activities />
                <Testimonials />
                <FAQ />
              </div>
            </div>
          </main>
        } />
        <Route path="/register" element={<Register />} />
        <Route path="/about-v2" element={<AboutV2 />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>

      <Footer />
      <FloatingMascot />
    </div>
  )
}

export default App
