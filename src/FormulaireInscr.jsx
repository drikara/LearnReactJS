import { useState } from "react"

export default function Formulaire(){
    const[etape , setEtape] = useState(1);
    const[formData , setFormData] = useState({
       
        // etape 1
        nom : "",
        prenoms : "",
        email : "",

        // etape 2
        telephone : "",
        adresse : "", 
        ville : "Abidjan",


        // etape 3

        profession : "",
        entreprise : "",
    });
    const handleChange = (e)=>{
        setFormData(
            {
                ...formData,
                [e.target.name] : e.target.value
            }
        )
    }


    // pagination avant 
    const suivant = () => setEtape(etape + 1);
    const precedent = () => setEtape(etape - 1);

    // envoyer les données

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Données finales", formData);
        alert("Inscription réussie !");
        

    };




    return(
 <div className="max-w-[500px] mx-auto p-5">
        <h2 className="text-2xl font-bold mb-5 text-gray-800">
            Inscription - Étape {etape}/3
        </h2>
    
    {/* Barre de progression */}
        <div className="w-full h-2.5 bg-gray-200 rounded-full mb-5 overflow-hidden">

                <div 
                    className="h-full bg-green-500 rounded-full transition-all duration-300"
                    style={{ width: `${(etape / 3) * 100}%` }}>


                </div>
        </div>
        <form onSubmit={handleSubmit}>
            {/** Étape 1 */}
            {
                etape === 1 && (
                    <div>
                        <h3>Informations Personnelles</h3>
                        <input 
                           name="nom"
                           value={formData.nom}
                           onChange={handleChange}
                           required
                           placeholder="Nom"
                           className="block w-full my-2.5 p-2.5"
                           
                        />
                        <input
                          name="prenoms"
                          value={formData.prenoms}
                          onChange={handleChange}
                          required
                          placeholder="Prenoms"
                          className="block w-full my-2.5 p-2.5"

                        />

                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="Email"
                          className="block w-full my-2.5 p-2.5"

                        />
                        
                    </div>
                )
            }

            {/* Étape 2 */}

            {
                etape === 2 && (

                    <div>
                        <h3>Coordonnées</h3>
                        <input 
                        
                            name="telephone"
                            type="telephone"
                            value={formData.telephone}
                            onChange={handleChange}
                            required
                            placeholder="Téléphone"
                            className="block w-full my-2.5 p-2.5"
                        
                        />

                          <input 
                        
                            name="adresse"
                            type="adresse"
                            value={formData.adresse}
                            onChange={handleChange}
                            required
                            placeholder="Adresse"
                            className="block w-full my-2.5 p-2.5"
                        
                        />


                          <input 
                        
                            name="ville"
                            type="ville"
                            value={formData.ville}
                            onChange={handleChange}
                            required
                            placeholder="Ville"
                            className="block w-full my-2.5 p-2.5"
                        
                        />

                    </div>
                )
            }

            {/* Étape 3 */}

            {
                etape === 3 && (
                    <div>
                        <h3>Informations professionnelles</h3>
                            <input 
                            
                                name="profession"
                                type="profession"
                                value={formData.profession}
                                onChange={handleChange}
                                required
                                placeholder="Profession"
                                className="block w-full my-2.5 p-2.5"
                            
                            />
                                <input 
                            
                                name="entreprise"
                                type="entreprise"
                                value={formData.entreprise}
                                onChange={handleChange}
                                required
                                placeholder="Entreprise"
                                className="block w-full my-2.5 p-2.5"
                            
                            />
                        
                    </div>
                )
            }

            <div className="bg-gray-100 p-4 my-5 rounded-md transition-all duration-300  hover:bg-gray-200 hover:shadow-md">
                <h4>Récapitulatif</h4>
              <p><strong>Nom:</strong> {formData.prenom} {formData.nom}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Ville:</strong> {formData.ville}</p>
              <p><strong>Profession:</strong> {formData.profession}</p>
            </div>

            {/* Boutons de navigation */}
            <div>
               
               {etape > 1 && (
                <button 
                
                    type="button"
                    onClick={precedent}
                    className=""
                >
                  {etape} / Précédent
                </button>
               )}

               {etape < 3 ? (
                 <button 
                    type="button"
                    onClick={suivant}
                    className=""
                 
                 >
                    {etape} / Suivant
                 </button>
               ) : (
                <button 
                
                    type="submit"
                    className=""
                >
                     Valider
                </button>
               )}

               
            </div>


        </form>
 </div>
    )
}