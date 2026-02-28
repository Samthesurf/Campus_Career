import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Collaboration from './components/Collaboration'
import About from './components/About'
import PartnersTicker from './components/PartnersTicker'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <PartnersTicker />
      <Collaboration />
      <About />
    </div>
  )
}

export default App
