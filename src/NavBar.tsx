import {Link} from "react-router-dom";
import {useState} from "react";
import MenuProfile from "./MenuProfile";
import './NavBar.scss'
import logo from './IMG/iconLogin.png';


function NavBar (){
    const [menuIsVisible, setMenuVisible] = useState(false)
    const toggleMenuVisibility = () => {
        setMenuVisible(menuIsVisible === false ? true : false);
    };

    return(
        <div className={'navBar'}>
        <nav>
            <Link to="/">
                <img src={}/>
            </Link>
            <h3>Generated last 24H :<br/>{6*7}</h3>
            <Link to="/info">See more infos</Link>
            {(window.location.href).includes('info') ? '':<button><Link to={'/info'}>More info</Link></button>}
            <div className={'logoutLOGO'} onClick={()=> openMenuProfile}>
                <img src={SignInLogo} onClick={toggleMenuVisibility}></img>
                {menuIsVisible ? <MenuProfile/> : <div/>
                }
            </div>
        </nav>
    </div>)
}

function openMenuProfile(){

}
export default NavBar