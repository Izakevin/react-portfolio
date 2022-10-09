import './App.css';

import Header from './components/Header.js';
import Education from './components/Education.js';
import Skills from './components/Skills.js';
import Contact from './components/Contact';
import AboutMe from './components/About_Me';

function App() {
  
  return (
    <div>

      <Header/>
      <body>

        <AboutMe/>

        <Education/>

        <div id="projects">
          <h2 className='section'>My Projects</h2>

          <h3>Coming Soon ...</h3>
        </div>

        <Skills/>

        <Contact/>
        
      </body>

      <footer>
        
      </footer>
    </div>
  );
}

export default App;
