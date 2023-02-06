import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import Container from './components/layout/Container'
import Home from './components/pages/Home'
import Team from './components/pages/Team'
import Aboutus from './components/pages/Aboutus'
import Collection from './components/pages/Collection'

import "./app.css";


function App() {
  return (
    <Router>
      
      <Navbar />
      <Container customClass="min-height">
      
      <Routes>
        
          <Route exact path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/collection" element={<Collection />} />  
         
        
      </Routes>
      </Container>
      <Footer />
      
    </Router>
  )
}

export default App
