import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Collaboration from './components/Collaboration'
import About from './components/About'
import PartnersTicker from './components/PartnersTicker'
import FloatingMascot from './components/FloatingMascot'
import Speakers from './components/Speakers'
import Activities from './components/Activities'
import Testimonials from './components/Testimonials'
import SeoMeta from './components/SeoMeta'
import Register from './pages/Register'
import Admin from './pages/Admin'

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
                <Collaboration />
                <About />
                <Speakers />
                <Activities />
                <Testimonials />
              </div>
            </div>
          </main>
        } />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>

      <FloatingMascot />
    </div>
  )
}

export default App
