import './Tableaux.css'
import TabDataLine from "./TabDataLine";
function hello(nom : String){
  console.log('order by ' + nom);
}

export default function Tableaux(props : any){
    const tout :any = Object.values(props)[0];
    const dataArrValueNames : any = Object.keys(props.arr[0]);
    return(

        <table>
            <tbody>
            <tr>
                <th className={'title'}>{props.titre}</th>
            </tr>
            <tr className={'names'}>{
                dataArrValueNames.map((currentElement : any, index : number)=>{
                    return <td onClick={()=>hello(currentElement)}>{currentElement}</td>
                })
            }</tr>
            {
                tout.map((arr:any)=>{return(
                    <tr>{
                        Object.values(arr).map(
                            (currentElement: any, index: number) => {
                                return (<TabDataLine elem={currentElement}/>);
                            })
                    }</tr>
                )})
            }
            </tbody>
        </table>
    )
}
