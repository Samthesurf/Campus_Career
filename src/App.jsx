import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Collaboration from './components/Collaboration'
import About from './components/About'
import PartnersTicker from './components/PartnersTicker'
import FloatingMascot from './components/FloatingMascot'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <PartnersTicker />

      {/* Animated and Coherent Wrapper for the bottom part */}
      <div className="lively-section-wrapper">
        {/* Animated ambient light blobs */}
        <div className="lively-bg-blob blob-1"></div>
        <div className="lively-bg-blob blob-2"></div>
        <div className="lively-bg-blob blob-3"></div>

        {/* Minimal grid overlay for tech/event feel */}
        <div className="lively-grid-overlay"></div>

        <div className="lively-content-pane">
          <Collaboration />
          <About />
        </div>
      </div>
      <FloatingMascot />
    </div>
  )
}

export default App
