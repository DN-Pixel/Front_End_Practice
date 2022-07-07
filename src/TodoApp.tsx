import {useState} from "react";
import {useEffect} from "react";
var list=[];
function addList(text : string){
    list.push(text);
}

export default function TodoApp(props : any) {
    const [text,setRText]= useState('');
    return(
        <form>
            <input name={'te'} type={'text'} onChange={(e)=>setRText(e.target.value)}>VOTRE MEMO ICI</input>
        </form>
    )
}

