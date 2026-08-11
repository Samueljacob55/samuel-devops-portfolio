import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatusBar from './components/StatusBar';
import DashboardMockup from './components/DashboardMockup';
import About from './components/About';
import SkillsShowcase from './components/SkillsShowcase';
import ToolCloud from './components/ToolCloud';
import Highlights from './components/Highlights';
import FocusAreas from './components/FocusAreas';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import BackgroundAura from './components/BackgroundAura';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0c0c0c] text-white">
      {/* Root noise filter — used by the shiny gradient headline */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <filter id="c3-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves={2} stitchTiles="stitch" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.35 0"
          />
          <feComposite in2="SourceGraphic" operator="in" result="noise" />
          <feBlend in="SourceGraphic" in2="noise" mode="multiply" />
        </filter>
      </svg>

      {/* Fixed fullscreen animated backdrop */}
      <BackgroundAura />

      <Navbar />
      <Hero />
      <StatusBar />
      <DashboardMockup />
      <About />
      <SkillsShowcase />
      <ToolCloud />
      <Highlights />
      <FocusAreas />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
