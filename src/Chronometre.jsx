import { useState, useEffect } from "react";

export default function Chronometre(){
    const[secondes, setSecondes] = useState(0);
    // À compléter : logique du chronomètre
    useEffect(()=>{
         const interval = setInterval(()=>{
            setSecondes(prevSecondes => prevSecondes + 1);
         }, 1000);
         // Nettoyage de l'intervalle lors du démontage du composant
         return () => {
             clearInterval(interval);
             console.log("Chronomètre démarré !");
         }
            
         
         
    }, []); // Le tableau de dépendances vide signifie que cela s'exécute une seule fois au montage
    return(
        <div className="chronometre p-4 border-2 border-gray-300 mt-5 w-100 mx-2.5 max-w-md mx-auto ">
            <h2 className="text-xl font-bold">Chronomètre</h2>
            <p className="text-xl font-bold">Temps écoulé : {secondes} secondes</p>
        </div>
    )
}