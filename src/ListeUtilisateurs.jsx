import { useEffect, useState } from "react"

export default function ListeUtilisateurs() {
  const [utilisateurs, setUtilisateurs] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);
  
  useEffect(() => {
    // Appel API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erreur réseau');
        }
        return response.json();
      })
      .then(data => {
        setUtilisateurs(data);
        setChargement(false);
      })
      .catch(error => {
        setErreur(error.message);
        setChargement(false);
      });
  }, []); // Tableau vide = une seule fois au montage
  

    return(
        <div className="border w-80 mb-7 mx-auto p-4">
            <h1 className="text-center">Liste des Utilisateurs</h1>
            <p  className="text-center ">
                { chargement && <p className="text-orange-400">Chargement...</p>}
                {erreur && <p className="text-red-600">Erreur: {erreur}</p>}
            </p>
            <ul className=" w-50">
               {utilisateurs.map((user)=>(
                
                    <li key={user.id}><strong>{user.name} - </strong> {user.email}</li>
                
               ))}
            </ul>
            

        </div>
    )
}