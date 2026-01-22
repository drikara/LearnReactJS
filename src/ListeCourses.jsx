import { useState } from "react";
export default function ListeCourses(){
    const[article , setArticle] = useState(["lait" , "oeufs" , "pain"]);
    const[nouvelArticle , setNouvelArticle] = useState("");
    const[isLoading , setIsLoading] = useState(false);

    const ajouterArticle = () =>{
        if(nouvelArticle.trim() !== ""){
            setIsLoading(true);
            setTimeout(()=>{
                setArticle([...article, nouvelArticle.trim()]);
                setNouvelArticle("");
                setIsLoading(false);
            },500);
        }
    }
    const supprimerArticle = (index)=>{
        const nouvelArticles = article.filter((_, i)=> i !== index);
        setIsLoading(true);
        setTimeout(()=>{
            setArticle(nouvelArticles);
            setIsLoading(false);
        },500);

    }
    return(
        <div>
            <h2 className="text-2xl font-bold mb-4">Liste de Courses</h2>
            <div className="mb-4">
                <input
                    type = "text"
                    value={nouvelArticle}
                    onChange={(e)=> setNouvelArticle(e.target.value)}
                    className="border border-gray-300 rounded px-3 py-2 mr-2 w-120"
                    placeholder="Ajouter un article"
                />

                <button onClick={ajouterArticle} className="bg-blue-500 text-white p-2 rounded cursor-pointer" disabled={isLoading}>
                    {isLoading ? "Ajout en cours..." : "Ajouter"}
                </button>
                <div>
                <ul className="mt-4">
                    {article.map((item, index)=>(
                        <li key={index} className="flex justify-between items-center border-b border-gray-200 py-2">
                            {item}
                            <button onClick={()=> supprimerArticle(index)} className="bg-red-500 text-white p-1 rounded cursor-pointer" disabled={isLoading}>
                                {isLoading ? "Suppression..." : "Supprimer"}
                            </button>
                        </li>
                    ))}
                </ul>
                </div>
            
            </div>  

        </div>
    )

}