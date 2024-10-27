
import './App.css';
import About from './componnets/About/About';
import Contact from './componnets/Contact/Contact';
import Experince from './componnets/Experince/Experince';
import Home from './componnets/Home/Home';
import Navbar from './componnets/Navbar/Navbar';
import Projects from './componnets/Projects/Projects';
import Skills from './componnets/Skills/Skills';

function App() {
  return (
    <div className='App-container'>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Experince/>
      <Projects/>
      <Contact/>
     
    </div>
  );
}

export default App;
