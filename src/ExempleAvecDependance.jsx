import { useEffect, useState } from "react";

export default function ExempleAvecDependance(){
    const[count, setCount] = useState(0);
    useEffect(()=>{
        // ce code s'exécute une seule fois au montage du composant
        document.title = `Compteur: ${count}`;

        
    }, [count]); // tableau de dépendances vide
    return(
        <div className="border border-gray-50 mx-auto max-w-md">
            <h2 className="text-center text-lg">ExempleAvecDependance Component</h2>
            <p className="text-center text-2xl">Compteur : {count}</p>
            <button onClick={()=>setCount(count + 1)} className="border border-gray-500 bg-amber-300 cursor-pointer ">Incrémenter</button>
        </div>
    )
}