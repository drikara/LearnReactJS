import { useEffect, useState } from "react";

export default function UseEffectBase(){
    const[count, setCount] = useState(0);
    useEffect(()=>{
        // ce code s'exécute après chaque rendu
        console.log("le composant a été rendu");
        
    })
    return(
        <div className="border border-gray-50 mx-auto max-w-md">
            <h2 className="text-center text-lg">UseEffectBase Component</h2>
            <p className="text-center text-2xl">Compteur : {count}</p>
            <button onClick={()=>setCount(count + 1)} className="border border-gray-500 bg-amber-300 cursor-pointer ">Incrémenter</button>
        </div>
    )
}