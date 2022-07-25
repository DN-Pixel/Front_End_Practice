import React from "react";
import './AuthForm.css';

async function createUser(username: String, password: String) {
    const response = await fetch('http://localhost:8080/auth', {
        method: 'POST',
        body: JSON.stringify({
            username:username,
            password:password
        }),
        headers: {'Content-Type': "application/json",Accept: "application/json"},
        credentials:"include"
    });
    if(!response.ok){
        console.log('impossible de se connecter')
        return true;
    }
    else{
        console.log('connexion ok')
        window.location.href = "/"
        return false
    }
}


function AuthForm(){
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [wrongpass, setWrongPassState] = React.useState(false);

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setWrongPassState(await createUser(username, password))
    };

    return(
        <div className={'container'}>
            <form onSubmit={handleSubmit}>
                <input type={'text'} name={'username'} placeholder={'votre nom'} onChange={e=>setUsername(e.target.value)}></input>
                <input type={'password'} name={'password'} placeholder={'password'} onChange={e=>setPassword(e.target.value)}></input>
                <input type={"submit"} value={"Log IN"}/>
                {wrongpass ? <p>WRONG PASSWORD AND/OR USERNAME !</p> : ''}
            </form>
        </div>
    )
}

export default AuthForm

//en jsc les form par default sont en get, ducoup si vous foirez un login ca va non seulement refresh la page
// avec le nouveau lien mais en plus afficher le mdp que zavez mis genre.


