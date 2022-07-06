import {Link} from "react-router-dom";
import {useState} from "react";
import MenuProfile from "./MenuProfile";
import './NavBar.css'
const logo = require('./IMG/logo-ign.png');
const SignInLogo = require('./IMG/iconLogin.png');

function NavBar (){
    const [menuIsVisible, setMenuVisible] = useState(false)
    const toggleMenuVisibility = () => {
        setMenuVisible(menuIsVisible === false ? true : false);
    };

    return(
        <div className={'navBar'}>
        <nav>
            <Link to="/">
                <img src={logo} alt={'logo ign'}/>
            </Link>
            <h3>Generated last 24H :<br/>{6*7}</h3>
            <Link to="/info">See more infos</Link>
            {(window.location.href).includes('info') ? '':<button><Link to={'/'}>More info</Link></button>}
            <div className={'logoutLOGO'} onClick={()=> openMenuProfile}>
                <img src={SignInLogo} onClick={toggleMenuVisibility} alt={'Profile Icon'}></img>
                {menuIsVisible ? <MenuProfile/> : <div/>

                }
            </div>
        </nav>
    </div>)
}
//todo  put this line 22 when info done:
// {(window.location.href).includes('info') ? '':<button><Link to={'/info'}>More info</Link></button>}
function openMenuProfile(){

}
export default NavBar