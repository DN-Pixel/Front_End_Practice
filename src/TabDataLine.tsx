import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";

function getDetails(id : number){
    console.log(id + " line clicked")
    //todo call api map details {id}
    window.location.href="http://localhost:3000/mapdetail"+id;
}

export default function TabDataLine(props: { elem: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }){
    console.log(props)
    return (<td onClick={()=>getDetails()}>{props.elem}</td>)
}
