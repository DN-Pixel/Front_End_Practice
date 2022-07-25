import './Tableaux.css'
import TabDataLine from "./TabDataLine";
function hello(nom : String){
  console.log('order by ' + nom);
}
function getDetails(id : number){
    console.log(id + " line clicked")
    //todo call api map details {id}
    window.location.href="http://localhost:3000/mapdetail"+id;
}
export default function Tableaux(props : any){
    const tout :any = Object.values(props)[0];
    const dataArrValueNames : any = Object.keys(props.arr[0]);
    return(

        <>
            <table>
                <tbody key={"tbody"}>
                <tr key={"title"}>
                    <th className={'title'}>{props.titre}</th>
                </tr>
                <tr className={'names'} key={"name"}>{dataArrValueNames.map((currentElement: any, index: number) => {
                    return  <td key={index}>
                                <div onClick={() => hello(currentElement)} className={"boxName"}>{currentElement}</div>
                            </td>;
                })}
                <td>select</td>
                </tr>

                {tout.map((arr: any, index: number) => {
                    return (
                        <tr key={index} onClick={()=>getDetails(arr.id)}>{Object.values(arr).map(
                            (currentElement: any, index: number) => {
                                return (<TabDataLine elem={currentElement} key={index}/>);
                            })}
                        <td key={index}>{<input type={"checkbox"}></input>}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
            <p>{tout.length}/{25}</p>
        </>

    )
}
