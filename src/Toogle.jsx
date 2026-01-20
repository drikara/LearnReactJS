import { useState } from "react"

export default function Toogle() {
    const [estVisible , setEstVisible] = useState(false);
    return(
        <div>
            <button onClick={()=>setEstVisible(!estVisible)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 cursor-pointer mt-2 transition duration-300">
                {estVisible ? "Masquer" : "Afficher"}
            </button>
            {estVisible && (
                <p>Le contenu est maintenant visible.</p>

            )}

        </div>
    )
}