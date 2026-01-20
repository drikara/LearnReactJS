import { useState } from "react"

export default function FormulaireComplet(){
    const [user, setUser] = useState({
        nom : "",
        email : "",
        age : "",
        password : ""
    });
    const handleChange = (e) => {
        setUser({
            // Copier l'object existant
            ...user,
            // Mettre à jour la propriété correspondante
            [e.target.name] : e.target.value
        })
    }
    return(
        <div className="p-4 border-2 border-gray-300 mt-5 mx-2.5 max-w-md ">
            <input 
               name="nom"
               value={user.nom}
               onChange={handleChange}
               placeholder="Nom"
               className="border border-gray-300 rounded px-3 py-2 w-full mb-2"
            />

            <input
              
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Email"
              className="border border-gray-300 rounded px-3 py-2 w-full mb-2"
            
            
            />

            <input
              
              name="age"
              value={user.age}
              onChange={handleChange}
              placeholder="Âge"
              type="number"
                className="border border-gray-300 rounded px-3 py-2 w-full mb-2"
            
            />

            <input
              
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Mot de passe"
              type="password"
              className="border border-gray-300 rounded px-3 py-2 w-full mb-2"
            
            />

            <div className="mt-4 p-3 border-t border-gray-300 ">
                <h3 className="text-lg font-semibold">Informations saisies :</h3>
                <p className="text-lg">Nom : {user.nom}</p>
                <p className="text-lg">Email : {user.email}</p>
                <p className="text-lg">Âge : {user.age}</p>
                <p className="text-lg ">Mot de passe : {user.password}</p> 
            </div>

        </div>

    )
}