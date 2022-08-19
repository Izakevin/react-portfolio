import './App.css';

function App() {
  return (
    <div>
      <header>
        <div id="hr-top">
          <p>Kevin Iza Software Developer</p>

          <nav id='Navagation'>
            <ul>About Me</ul>
            <ul>Education</ul>
            <ul>Projects</ul>
            <ul>Skills</ul>
            <ul>Contact</ul>
          </nav>
        </div>

        <div id="hr-info">
          <h1>Hello, World! Im Kevin</h1>
          <p>I am a software developer searching for a new spawn point and grinding levels to upgrade my skill tree</p>

          <div id="hr-buttons">
            <button onClick={""}>Projects</button>
            <button onClick={()=> window.open("https://github.com/Izakevin","_blank")}>Github</button>
          </div>
        </div>

      </header>

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
