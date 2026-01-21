import { useState } from "react";

export default function SaisieText(){
    const[text , setText] = useState("");
    const handleChange =(e)=>{
        setText(e.target.value);
    }
    
    return(
        <div className="max-w-md mx-auto mt-10">
            <div className="p-2 border mb-4 ">
                <p className="text-center p-2 ">{text}</p>
                <p className="text-center "> Longueur : {text.length} caractères</p>
            </div>
            <input 
                type="text" 
                value={text} 
                onChange={handleChange}
                placeholder="Écrivez quelque chose..."
                className="border p-2 w-full"
                  
            />

        </div>
    )
}