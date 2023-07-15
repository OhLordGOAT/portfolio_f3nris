import './App.css'
import About from './components/about/About'
import Header from "./components/header/Header"
import Navbar from "./components/navbar/Navbar"
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Project from './components/project/Project'
import Skill from './components/skill/Skill'

function App() {

  return (
    <>
        <Navbar/>
        <Header/>
        <About/>
        <Skill/>
        <Experience/>
        <Project/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default App
