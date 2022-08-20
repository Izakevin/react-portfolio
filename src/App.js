import './App.css';
import Header from './components/Header.js';

function App() {
  return (
    <div>
      {/* <Header test = "u ready"/>      how props works*/}   
      <Header/>
      <body>
        <div id="about_me">
          <h2>About Me</h2>
          <p>I am Kevin Iza a software developer from Brooklyn New York. My interest in technology started when I realized I had witnessed a shift in the portable phone market from flip and sliding phones to smartphones with touch displays. The rapid change and adoption were fascinating to see and look back on.
          </p>
        </div>

        <div id="education">
          <h2>Education</h2>
          <p>A bachelor's degree of science from New York University Tandon School of Engineering
            Minor in Studies of Technology, Science, and Society
          </p>

        </div>

        <div id="projects">
          <h2>My Projects</h2>
        </div>

        <div id="skills">
          <h2>Skills</h2>
        </div>

        <div id ="contact_me">
          <h2>Contact Me</h2>
        </div>
        
      </body>

      <footer>
        
      </footer>
    </div>
  );
}

export default App;
