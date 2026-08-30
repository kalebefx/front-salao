import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Servicos from './components/Servicos'
import Sobre from './components/Sobre'
import ComoFunciona from './components/ComoFunciona'
import Galeria from './components/Galeria'
import Contato from './components/Contato'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <Servicos />
      <Sobre />
      <ComoFunciona />
      <Galeria />
      <Contato />
      <Footer />
    </div>
  )
}