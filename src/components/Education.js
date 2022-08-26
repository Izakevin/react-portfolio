import './styles/Education.css'

function Education(){
    return(
        <div id="education">
            <h2 className='section'>Education</h2>

            <div id = "Edu_layout">
                <img src={require('./Logos/tandon_seal.webp')} alt="New York University Tandon School Seal"/>
                <p>A bachelor's degree of science from New York University Tandon School of Engineering
            Minor in Studies of Technology, Science, and Society
                </p>
            </div> 

        </div>
    )
}

export default Education;