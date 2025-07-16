import './App.css'
import './index.css'
import Header from './components/Header.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Education from './components/Education.jsx'

function App() {
  return (
    <div className='layout'>
      <Header/>
      <section className='content'>
        <About/>
        <Education/>
        <Projects/>
      </section>
    </div>
  )
}

export default App
