export default function ProfilUser({nom , age , ville , photo}){
    return(
        <div className="p-7 border-2 border-gray-300 mt-5 w-100 mx-2.5 max-w-md mb-3 flex flex-col items-center">
            <img
             src={photo} 
             alt={`Photo de profil de ${nom}`} 
             className="w-32 h-32 rounded-full mx-auto mb-4"
             
             />
             
            <h2 className="text-center text-2xl font-bold mb-2">{nom}</h2>
            <p className="text-center mb-1">Âge: {age} ans</p>
            <p className="text-center">Ville: {ville}</p>
        </div>
    )
}