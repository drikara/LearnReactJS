import { useEffect, useState } from "react";

export default function ListeUsers(){
    const[users, setUsers] = useState([]);
    const[loading, setLoading] = useState(true);
    

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data =>{
            setUsers(data);
            setLoading(false);
        })
        .catch(error => {
            console.error("Erreur lors du chargement des utilisateurs :", error);
            setLoading(false);
        });
    },[ ]); // Le tableau de dépendances vide signifie que cela s'exécute une seule fois au montage
    return(
        <div className="user-container p-4 border-2 border-gray-300 mt-5 w-100 mx-2.5 max-w-md mx-auto ">
            {loading ? (
                <p className="loading ">Chargement des utilisateurs...</p>
            ) : (
                <ul className="user-list list-disc list-inside ">
                    {users.map(user =>(
                        <li key={user.id}>
                            {user.name} - {user.email}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}