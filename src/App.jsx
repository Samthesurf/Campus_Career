import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Collaboration from './components/Collaboration'
import About from './components/About'
import PartnersTicker from './components/PartnersTicker'
import FloatingMascot from './components/FloatingMascot'
import Speakers from './components/Speakers'

function App() {
  return (
    <div className="app-container">
      <Navbar />
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
        </div>
      </div>
      <FloatingMascot />
    </div>
  )
}

export default App
