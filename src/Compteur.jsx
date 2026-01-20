import { useState } from "react"

export default function Compteur(){
    const[count, setCount] = useState(0);
    return(
        <div className="p-7 border-2 border-gray-300 mt-5  mx-2.5 max-w-md mb-3">
            <h2 className="text-center">Compteur : {count} </h2>

            <div className="mt-4 flex flex-row">
                <button onClick={()=>setCount(count + 1)} className="bg-blue-500 text-white px-4 py-2 rounded mr-2 cursor-pointer">Incrémenter</button>
                <button onClick={()=>setCount(count-1)} className="bg-red-500 text-white px-4 py-2 rounded mr-2 cursor-pointer">Décrementer</button>
                <button onClick={()=>setCount(0)} className="bg-gray-500 text-white px-4 py-2 rounded cursor-pointer">Réinitialiser</button>

            </div>

        </div>
    )
}
