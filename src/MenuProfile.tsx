import './MenuProfile.css'

function MenuProfile (){
    let name = "jean Du Pont"
    return (
        <div className={'menuProfile'}>
            <ul>
                <li>{name}</li>
                <li><a href={'/'}>•Back To APP</a></li>
                <li><a href={'/'}>•Admin Page</a></li>
                <li><button onClick={setMaintenanceMode}>Maintenance Mode</button></li>
                <li><button onClick={()=>logout()}>LOG OUT</button></li>
            </ul>
        </div>
    )
}


function setMaintenanceMode() {
    console.log('maintenance mod clicked')
}

//TODO logout
function logout(){
    console.log("LOG OUT")
}
export default MenuProfile