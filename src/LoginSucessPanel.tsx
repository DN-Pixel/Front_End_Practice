import {useState} from "react";
import './LoginSuccesPanel.css'

export default function LoginSucessPanel() {
    const [loginSucessWindow,openCloseWindow] = useState(true);
    //todo if je vien de la login page : true / else not (http referer)
    return loginSucessWindow ? <h1 className={'panel'} onClick={()=>openCloseWindow(false)}>YOU'RE IN !</h1> : <></>;
}