import { useState } from "react";
export default function FormulaireNom(){
    const[nom , setNom] = useState('');
    return(
        <div>
            <p> Bonjour {nom} !</p>
            <input 
            type="text"
            value={nom}
            onChange={(e)=>setNom(e.target.value)}
            placeholder="Entrez votre nom"
            className="border border-gray-300 rounded px-4 py-2 mr-2"

            
            />
        </div>

    )
}