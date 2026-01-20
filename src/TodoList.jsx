import { useState } from "react";
export default function TodoList(){
    const[todo , setTodo] = useState([]);
    const[inputValue , setInputValue]= useState(''); 
    // ajouter une input value
    const ajouterTodo = ()=>{
        // Éviter les entrées vides
        if(inputValue.trim() === ''){
            // Retourner si l'entrée est vide
            return;
        }
        setTodo([...todo, inputValue]);
        setInputValue("");

    
    }
    // supprimer une todo
    const supprimerTodo = (indexToRemove) =>{
        setTodo(todo.filter((_, index)=> index !== indexToRemove));

    }
    // modifie une todo
    const modifierTodo = (indexToModify) =>{
        const nouveauTexte = prompt("Entrez le nouveau texte pour la tâche:");
        if(nouveauTexte !== null && nouveauTexte.trim() !== ''){
            setTodo(
                todo.map((item, index) =>
                index === indexToModify ? nouveauTexte : item
                )
            );
        }

    }

    return(
        <div className="p-7 border-2 border-gray-300 mt-5 w-100 mx-2.5 max-w-md mx-auto ">
            <h2 className="text-lg font-semibold text-center mb-4">Ma liste de tâches</h2>
            <input 
                type="text" 
                value={inputValue}
                onChange = {(e)=> setInputValue(e.target.value)}
                placeholder="Ajouter une tâche"
                className="border border-gray-300 rounded px-4 py-2 mr-2 mb-4 "
            />
            <button onClick={ajouterTodo} className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">Ajouter</button>
            <ul className="list-disc list-inside mt-4 ">
                {todo.map((item, index)=>(
                    <li key={index} className="flex justify-between items-center mb-2 ">
                        {item}
                        <button onClick={()=>modifierTodo(index)} className="bg-yellow-500 text-white px-2 py-1 rounded mr-2 cursor-pointer">Modifier</button>
                        <button onClick={()=>supprimerTodo(index)} className="bg-red-500 text-white px-2 py-1 rounded cursor-pointer">Supprimer</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}