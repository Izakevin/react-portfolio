import './styles/Navigation.css';
import Btn1 from './Btn1.js';

function Navigation(Props){

    //id = null;
    const handleClick = (id) => {
        id.current?.scrollIntoView({behavior: 'smooth'});
        console.log("clicked");
    };

    
    return(
    <div id="hr-top">
        <p>Kevin Iza Software Developer</p>

        <nav id='Navagation'>
            <ul><Btn1 onClick={handleClick(Props.item)}  name= "About Me"/></ul>
            <ul><Btn1 onClick={handleClick('education')} name= "Education"/></ul>
            <ul><Btn1 name= "Projects"/></ul>
            <ul><Btn1 name= "Skills"/></ul>
            <ul><Btn1 name= "Contact"/></ul>
        </nav>
    </div>
    )
}

export default Navigation;