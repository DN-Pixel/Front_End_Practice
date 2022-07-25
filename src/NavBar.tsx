import {Link} from "react-router-dom";
import {memo, useEffect, useState} from "react";
import MenuProfile from "./MenuProfile";
import './NavBar.css'
const logo = require('./IMG/logo-ign.png');
const SignInLogo = require('./IMG/iconLogin.png');

//todo export the h3 line 29 into another
// element memoed so thatte fuction doesnt refresh on every single click on the profile pic.
function NavBar (){
    const [menuIsVisible, setMenuVisible] = useState(false)
    const toggleMenuVisibility = () => {
        setMenuVisible(menuIsVisible === false ? true : false);
    };

    //todo generated last 24 hour, compter le nombre de ligne dans la requete head
    const[count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => (count + 1)%35);
        }, 5000);
    });
    return(
        <div className={'navBar'}>
        <nav>
            <Link to="/">
                <img src={logo} alt={'logo ign'}/>
            </Link>
            <h3>Generated last 24H :<br/>{count}</h3>
            <Link to="/info">See more infos</Link>
            {(window.location.href).includes('info') ? '':<button><Link to={'/'}>More info</Link></button>}
            <div className={'logoutLOGO'}>
                <img src={SignInLogo} onClick={toggleMenuVisibility} alt={'Profile Icon'}></img>
                {menuIsVisible ? <MenuProfile/> : <div/>}
            </div>
        </nav>
    </div>)
}
//todo  put this line 22 when info done:
// {(window.location.href).includes('info') ? '':<button><Link to={'/info'}>More info</Link></button>}
export default memo(NavBar);
//todo pixel note : indeed memo is necessary so we dont spam request as soon as we refresh anything on the page
