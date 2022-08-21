import './styles/Skills.css'

import Cpp from './Logos/C++.js'
import Java from './Logos/Java.js'
import JavaScript from './Logos/JavaScript.js'
import Python from './Logos/Python.js'

function Skills(){
    return(
    <div id="skills">
        <h2>Skills</h2>

        <ul>
            <li><Cpp/></li>
            <li><Java/></li>
            <li><JavaScript/></li>
            <li><Python/></li>
            <li>HTML</li>
            <li>CSS</li>
            <li>C#</li>
            <li>Unreal Engine</li>
            <li>Docker</li>
            <li>MySQL</li>
            <li>MongoDB</li>
        </ul>
        
    </div>
    )
}

export default Skills;