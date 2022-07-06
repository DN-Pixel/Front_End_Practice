import './MenuProfile.scss'

function MenuProfile (){
    let name = "jean Du Pont"
    return (
        <div className={'menuProfile'}>
            <ul>
                <li>{name}</li>
                <li><a href={''}>Back To APP</a></li>
                <li><a href={''}>Admin Page</a></li>
                <li><button onClick={setMaintenanceMode}>Maintenance Mode</button></li>
            </ul>
        </div>
    )
}

function setMaintenanceMode() {
    console.log('maintenance mod clicked')
}

export default MenuProfile