import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";

function getDetails(){
    console.log(2 + " line clicked")
    //todo call api map details {id}
    window.location.href="http://localhost:3000/mapdetail"+2;
}

export default function TabDataLine(props: { elem: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }){
    console.log(typeof props)
    return (<td onClick={()=>getDetails()}>{props.elem}</td>)
}
