import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";

export default function TabDataLine(props: { elem: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }){
    return (<td>{props.elem}</td>)
}
