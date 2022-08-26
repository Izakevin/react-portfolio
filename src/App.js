import './App.css';
// import {useRef} from 'react';

import Header from './components/Header.js';
import Skills from './components/Skills.js';
import Education from './components/Education.js';

function App() {

  // const aboutmeRef = useRef(null);

  return (
    <div>

      <Header/>
      <body>
        <div id="about_me">
          <h2 className='section'>About Me</h2>
          <p>I am Kevin Iza a software developer from Brooklyn New York. My interest in technology started when I realized I had witnessed a shift in the portable phone market from flip and sliding phones to smartphones with touch displays. The rapid change and adoption were fascinating to see and look back on.
          </p>
        </div>

        <Education/>

        <div id="projects">
          <h2 className='section'>My Projects</h2>
        </div>

        <Skills/>

        <div id ="contact_me">
          <h2 className='section'>Contact Me</h2>
        </div>
        
      </body>

      <footer>
        
      </footer>
    </div>
  );
}

export default App;
