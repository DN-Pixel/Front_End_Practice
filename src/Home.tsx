import Tableaux from "./Tableaux";
import './App.css';
import {useState} from "react";
import LoginSucessPanel from "./LoginSucessPanel";
import NavBar from "./NavBar";
export default function Home() {
    const array1 = [
        {
            id:1,
            name : 'oui',
            age : 45,
            taille:180,
            a: 15,
            b : 'tt',
            c:'colo.',
            d:1,
            e:0,
            f:'g',
            1:2,
            3:6,
            15:30,
            56:45,
            test:'encorev1'
        },
        {
            id:2,
            name:'non',
            age :20,
            taille:190,
            a: 17,
            b : 'tp',
            c:'nel.',
            d:0,
            e:1,
            f:'f',
            1:8,
            3:698,
            15:4530,
            56:5445,
            test:'encorev2'
        },
        {
            id:3,
            name : 'oui',
            age : 45,
            taille:180,
            a: 15,
            b : 'tt',
            c:'colo.',
            d:1,
            e:0,
            f:'g',
            1:2,
            3:6,
            15:30,
            56:45,
            test:'encorev3'
        },
        {
            id:4,
            name:'non',
            age :20,
            taille:190,
            a: 17,
            b : 'tp',
            c:'nel.',
            d:0,
            e:1,
            f:'f',
            1:8,
            3:698,
            15:4530,
            56:5445,
            test:'encorev4'
        }
    ]
    const array3= [
        {
            id:75,
            name : 'oui',
            age : 2,
            taille:18,
            a: 5,
            b : 'bb',
            c:'co.',
            d:1,
            e:0,
            f:'f',
            1:22,
            3:67,
            15:350,
            56:452,
            test:'encorev155'
        },
        {
            id:76,
            name:'non',
            age :44,
            taille:120,
            a: 17,
            b : 'vi',
            c:'l.',
            d:0,
            e:1,
            f:'h',
            1:87,
            3:68,
            15:450,
            56:445,
            test:'encorev156'
        }
    ]
    const array2= [
        {
            id:7,
            name : 'oui',
            age : 2,
            taille:18,
            a: 5,
            b : 'bb',
            c:'co.',
            d:1,
            e:0,
            f:'f',
            1:22,
            3:67,
            15:350,
            56:452,
            test:'encorev55'
        },
        {
            id:8,
            name : 'oui',
            age : 2,
            taille:18,
            a: 5,
            b : 'bb',
            c:'co.',
            d:1,
            e:0,
            f:'f',
            1:22,
            3:67,
            15:350,
            56:452,
            test:'encorev56'
        },
        {
            id:9,
            name : 'oui',
            age : 2,
            taille:18,
            a: 5,
            b : 'bb',
            c:'co.',
            d:1,
            e:0,
            f:'f',
            1:22,
            3:67,
            15:350,
            56:452,
            test:'encorev57'
        },
        {
            id:10,
            name : 'oui',
            age : 2,
            taille:18,
            a: 5,
            b : 'bb',
            c:'co.',
            d:1,
            e:0,
            f:'f',
            1:22,
            3:67,
            15:350,
            56:452,
            test:'encorev58'
        },
        {
            id:11,
            name : 'oui',
            age : 2,
            taille:18,
            a: 5,
            b : 'bb',
            c:'co.',
            d:1,
            e:0,
            f:'f',
            1:22,
            3:67,
            15:350,
            56:452,
            test:'encorev59'
        },
        {
            id:12,
            name : 'oui',
            age : 2,
            taille:18,
            a: 5,
            b : 'bb',
            c:'co.',
            d:1,
            e:0,
            f:'f',
            1:22,
            3:67,
            15:350,
            56:452,
            test:'encorev60'
        },
        {
            id:13,
            name : 'oui',
            age : 2,
            taille:18,
            a: 5,
            b : 'bb',
            c:'co.',
            d:1,
            e:0,
            f:'f',
            1:22,
            3:67,
            15:350,
            56:452,
            test:'encorev61'
        },
        {
            id:14,
            name : 'oui',
            age : 2,
            taille:18,
            a: 5,
            b : 'bb',
            c:'co.',
            d:1,
            e:0,
            f:'f',
            1:22,
            3:67,
            15:350,
            56:452,
            test:'encorev62'
        },
        {
            id:15,
            name : 'oui',
            age : 2,
            taille:18,
            a: 5,
            b : 'bb',
            c:'co.',
            d:1,
            e:0,
            f:'f',
            1:22,
            3:67,
            15:350,
            56:452,
            test:'encorev63'
        }
    ]

    const [numeroChoisi,updatenum] = useState(0);

    return (
        <div className="App">
            <NavBar/>
            <header className="App-header">
                <LoginSucessPanel/>
                <Tableaux arr={(numeroChoisi===0 ? array1:numeroChoisi===1 ? array2 : array3)} titre={"TAB:" + (numeroChoisi+1)} num={numeroChoisi}/>
                <div className={'ArrayOptionsButtons'}>
                <button onClick={()=>updatenum((((numeroChoisi-1)%3)+3)%3)}>Précedent</button>
                <button onClick={()=>updatenum((numeroChoisi+1)%3)}>Suiviant</button>
                </div>
            </header>
        </div>
    );
}

//todo normalement jaurai l'array dans un
// go full prop drilling dans les array state ou un bail dugenre et hop ca load larray en fonction de la request
//todo trouver un moyen de changer la request en cliquant dans les colonnes sur l'array : "context provider"
// et ajouter 'asc' 'desc' a coté des olonnes X quand c'est trié par la-dite colonne X



