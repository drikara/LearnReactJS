import { useEffect, useState } from "react";

export default function Meteo(){
    const[ville , setVille] = useState('Abidjan');
    const[recherche , setRecherche] = useState();
    const[chargement , setChargement] = useState(true)
    const[meteo , setMeteo] = useState(null)
    const[erreur , setErreur] = useState('');


useEffect(()=>{
    const chargerMeteo = async () =>{
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/1`);
            const data = await response.json();
            setMeteo({
                ville : ville , 
                temperature  : Math.floor(Math.random() * 15) + 25,
                description : ['Ensoleillé', 'Nuageux', 'Pluvieux'][Math.floor(Math.random() * 3)]

            });
            setChargement(false);
            
        } catch (error) {
            setErreur('Impossible de charger la météo')
            setChargement(false)
        }

    }
    chargerMeteo()
},[ville])
const handleSubmit = (e) =>{
    e.preventDefault();
    setVille(recherche)
}

return(
    <div className="w-60 mx-auto p-5">
        <h2>🌤️ Météo</h2>

        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={recherche}
                onChange={(e)=>setRecherche(e.target.value)}
                placeholder="Entrez une ville"
                className="w-70 p-2"
            
            />
            <button type="submit" className="p-2 border border-b-blue-400 cursor-pointer">Rechercher</button>

           
        </form>
         
      {chargement && <p>Chargement...</p>}
      {erreur && <p className="text-red-700">{erreur}</p>}
      
      {meteo && !chargement && (
        <div >
          <h3>{meteo.ville}</h3>
          <p >
            {meteo.temperature}°C
          </p>
          <p >{meteo.description}</p>
        </div>
      )}
    </div>

   
)


}