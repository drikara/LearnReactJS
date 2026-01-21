import { useState } from "react"

export default function ToggleSwitch(){
 const[estActif , setEstActif] = useState(false);

 const handleToggle = () => {
    setEstActif(!estActif);
 }
    return(
        <div className="text-center mt-10">
            <button onClick={handleToggle} className={`px-4 py-2 rounded-full focus:outline-none transition-colors duration-300 ${estActif ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                {estActif ? '🟢 Actif' : '🔴 Inactif'}

            </button>
            <div className="mt-4">
                {estActif && <p>Le toggle est activé !</p> }
            </div>

        </div>
    )
}