import './styles/Header.css';
import Navigation from './Navigation';

function Header(Props){
    return (
    <header>
        {/* <p>{Props.test}</p>      how to use props*/}
        
        <Navigation/>

        <div id="hr-info">
          <h1><span id ="HW">Hello, World!_ </span> Im Kevin</h1>
          <p>I am a software developer searching for a new spawn point and grinding levels to upgrade my skill tree</p>

          <div id="hr-buttons">
            <button onClick={""}>Projects</button>
            <button onClick={()=> window.open("https://github.com/Izakevin","_blank")}>Github</button>
          </div>
        </div>

      </header>
    )
}

export default Header;