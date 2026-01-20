import { useEffect, useState } from "react";

export default function exempleMontage(){
    const[donnees , setDonnees] = useState(null);
    
    // Ce useEffect s'exécute une seule fois au montage du composant
    useEffect(()=>{
        // afficher un message dans la console
        console.log("composant monté");
        // simuler un appel API
        setTimeout(()=>{
            setDonnees("Voici les données chargées !");

        }, 2000);
        
    }, []); // tableau de dépendances vide signifie que cela s'exécute une seule fois au montage

    return(        
    <div>
       {donnees ? <p>{donnees}</p> : <p>Chargement...</p>}
    </div>
    )
}