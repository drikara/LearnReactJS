export default function mesCompetences(){
    const competences = [
        {id:1, nom:"HTML", niveau:"Avancé"},
        {id:2, nom:"CSS", niveau:"Avancé"},
        {id:3, nom:"JavaScript", niveau:"Intermédiaire"},
        {id:4, nom:"React", niveau:"Intermédiaire"},
        {id:5, nom:"Node.js", niveau:"Débutant"},
    ];
    return(
        <div className="p-7 border-2 border-gray-300 mt-5 w-100 mx-2.5 max-w-md mb-3">
            <h2>Mes compétences</h2>

            <ul>
                {competences.map((competence)=>(
                    <li key={competence.id}>{competence.nom} - {competence.niveau}</li>
                ))}
            </ul>

        </div>
    )
}