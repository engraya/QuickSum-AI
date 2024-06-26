import HeroSection from './components/HeroSection'
import ArticleDemo from './components/ArticleDemo'
import './App.css'
import LandingText from './components/LandingText'
import Header from './components/Header'
import Features from './components/Features'
import Testmonials from './components/Testmonials'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'
import Home from './components/Home'
import SummarizePage from './components/SummarizePage'

function App() {

  return (
    <>
       <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="summarize" element={<SummarizePage />} />
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App