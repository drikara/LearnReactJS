import { useState } from "react"

export default function FormulaireInscription(){
    // hook pour email
    const[email , setEmail] = useState("");
    // hook pour les mots de passe
    const[password, setPassWord] = useState('');
    // hook pour cou
    const [accepterCou , setAceppterCou] = useState(false);
    // pour afficher les erreurs
    const[erreur , setErreur] = useState('');

    // la fonction pour la validation
    const handleSubmit = (e)=>{
        e.preventDefault();

        if(email === ""){
            setErreur("Email requis !")
            return;
        }
        // pour la taille de mot de passe
        if(password.length <6){
            setErreur("Mot de passe trop court (min 6 caractères)");
            return;
        }

        // pour accepter les cou ou pas
        if(!accepterCou){
            setErreur("Vous devez accepter les CGU")
            return;
        }

        // lorsque tout est okay
        setErreur("");
        alert('Inscription réussie !', { email, motDePasse })
    }

    return(
        <div>
            <form  onSubmit={handleSubmit} className="flex flex-col mt-4 w-50 mx-auto border p-4 mb-5">
                <h2 className="text-center mb-4">Inscription</h2>
                <p>
                    {erreur && <p className="text-red-700">{erreur}</p> }
                </p>
                <input 
                    type="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e)=>setEmail(e.target.value)}
                    className="border rounded-sm pl-3 my-3"
                
                />
              

                
                <input 
                  type="password"
                  value={password}
                  placeholder="Mot de Passe"
                  onChange={(e)=>setPassWord(e.target.value)}
                  className="border rounded-sm pl-3 my-3"
                
                />
            <label >
                <input 
                   type="checkbox"
                   value={accepterCou}
                   onChange={(e)=>setAceppterCou(e.target.checked)}
                   className="my-3"
                   
                
                />
                J'accepte les CGU
          </label>
                <button type="submit" className="border  cursor-pointer bg-green-500 text-white hover:bg-green-600">S'inscrire</button>
            </form>
          

        </div>
    )
}