import { useState, useEffect } from "react";
export default function Recherches(){
    const[recherche , setRecherche] = useState("");
    const[resultat , setResultat] = useState([]);
    const[user , setUser] = useState([]);
    //chargement les utilisateurs depuis l'api
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data=>{
            setUser(data);
            setResultat(data);
        });
    }, [])
    // filter quand la recharge change
    useEffect(()=>{
        const filtre = user.filter((u)=>u.name.toLowerCase().includes(recherche.toLowerCase()));
        setResultat(filtre);
    })

    return(
        <div>
            <input 
            type="text" 
            placeholder="Rechercher un utilisateur"
            value={recherche}
            onChange={(e)=> setRecherche (e.target.value)}
            className="border-2 border-gray-300 p-2 mb-4 w-full max-w-md mx-auto block"
            

            />
            <ul className="max-w-md mx-auto ">
                {resultat.map((u)=>(
                    <li key={u.id} className="border-b border-gray-200 py-2">
                        {u.name} - {u.email}
                    </li>
                ))}
            </ul>

        </div>
    )
}