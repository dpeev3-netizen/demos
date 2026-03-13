import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Preloader from './components/ui/Preloader'
import ScrollToTop from './components/utils/ScrollToTop'

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'))
const Properties = lazy(() => import('./pages/Properties'))
const PropertyDetail = lazy(() => import('./pages/PropertyDetail'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Sell = lazy(() => import('./pages/Sell'))
const Services = lazy(() => import('./pages/Services'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const Terms = lazy(() => import('./pages/Terms'))

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Preloader />
      <Navbar />
      <Suspense fallback={<div className="min-h-screen bg-[#FAFAFA]"></div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  )
}

export default App
