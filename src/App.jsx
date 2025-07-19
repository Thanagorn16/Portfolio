import './App.css'
import './index.css'
import Header from './components/Header.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Education from './components/Education.jsx'
import Sportlight from './components/Spotlight.jsx'
import Icon from './components/Icon.jsx'

function App() {
  return (
    <>
      <Sportlight/>
      <div className='layout'>
        <Header/>
          <section className='content'>
            <About/>
            <Education/>
            <Projects/>
          </section>
      </div>
    </>
  )
}

export default App
