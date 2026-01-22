import { useState } from "react";

export default function FormulaireUtilisateur(){
    const[utilisateur, setUtilisateur] = useState({
        nom : "",
        prenoms : "",
        age : "",
        ville : "Abidjan"
    });
    const handleChange = (champ , valeur) =>{
        setUtilisateur(
            {
                ...utilisateur,
                [champ] : valeur
            }
        )

    }
    return(
        <div className="">
            <input 
                placeholder="Nom"
                value={utilisateur.nom}
                onChange={(e)=>handleChange("nom", e.target.value)}
                
            />
            <input
                placeholder="Prenoms"
                value={utilisateur.prenoms}
                onChange={(e)=>handleChange("prenoms", e.target.value)}
            />

            <input 
                type="number"
                placeholder="Âge"
                value={utilisateur.age}
                onChange={(e)=>handleChange("age", e.target.value)}
            />
            <input 
            
                placeholder="Ville"
                value={utilisateur.ville}
                onChange={(e)=>handleChange("ville",e.target.value)}
            
            />

            <div>
                <h3>Aperçu :</h3>
                <p>{utilisateur.prenoms} - {utilisateur.nom}</p>
                <p>{utilisateur.age} ans</p>
                <p>{utilisateur.ville}</p>
            </div>
        </div>
    )
}