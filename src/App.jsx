import { useEffect, useState } from "react";
import Header from "./Header";
import Competences from "./Competences";
import Cart from "./Cart";
import ProfilUser from "./ProfilUser";
import Compteur from "./Compteur";
import FormulaireNom from "./FormulaireNom";
import Toogle from "./Toogle";
import FormulaireComplet from "./FormulaireComplet";
import TodoList from "./TodoList";
import UseEffectBase from "./UseEffectBase";
import ExempleAvecDependance from "./ExempleAvecDependance";
import ExempleMontage from "./ExempleMontage";
import ListeUsers from "./Api";
import Chronometre from "./Chronometre";
import Recherches from "./Recherche";
import CitationAleatoire from "./Citation";
import SaisieText from "./SaisieText";
import ToggleSwitch from "./ToggleSwitch";


export default function App(){
  const nom = "jean";
  const age = 30;
 

 const fruits = ["pomme", "banane", "orange", "kiwi","Mangue", "Ananas", "Fraise", "Raisin", "Cerise", "Peche"];

return (
  <div className="App">
    <Header />
    <>
      <div className="bg-green-500 p-2 text-white text-center ">
        <p>Vous êtes connecté.</p>
      </div>
      <div className="text-center mx-auto max-w-md mb-4 rounded-md w-full">
        <Toogle />
         
      </div>


    <div className="mx-auto max-w-md">
      <ToggleSwitch />
    </div>
      <div className="mt-5">
        <SaisieText />
      </div>
      <div className="mt-5">
        <CitationAleatoire />
      </div>
      <div>
        <ExempleMontage />
      </div>
      <div>
        <Chronometre />
      </div>
      <div>
        <Recherches />
      </div>
      <div>
        <ListeUsers />
      </div>
    
      <div className=" flex flex-col p-7 border-2 border-gray-300 mt-5 w-100 mx-2.5 max-w-md mx-auto">
        <h2>Bienvenue, {nom.charAt(0).toUpperCase() + nom.slice(1)} !</h2>
        <p>Vous avez {age} ans.</p>
        <p>L'année prochaine vous aurez {age + 1} ans.</p>
      </div>
      <div className="p-7 border-2 border-gray-300 mt-5 w-100 mx-2.5 max-w-md mx-auto">
        <h2 className="text">Mes fruits préférés</h2>
        <ul className="p-4 list-disc list-inside">
          {fruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
      </div>
      <div className="mx-auto max-w-md">
        <FormulaireComplet />
      </div>
     <div className="mx-auto max-w-4xl">
         <Competences />
     </div>

      <div className="flex flex-row flex-wrap justify-center mx-auto max-w-4xl">
           <Cart 

        titre="ReactJS"
        description="Bibliothèque JavaScript pour construire des interfaces utilisateur"
        
        
        />
      <Cart 
        titre="VueJS"
        description="Framework JavaScript progressif pour construire des interfaces utilisateur"
     
       />

        <Cart 
        titre="Angular"
        description="Framework JavaScript pour construire des applications web"
     
       />
       <Cart 
        titre="Angular"
        description="Framework JavaScript pour construire des applications web"
       />
      </div>
      <div className="flex flex-row">
          <ProfilUser
        nom="Alice"
        age={28}
        ville="Paris"
        photo="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <ProfilUser
        nom="Bob"
        age={35}
        ville="Londres"
        photo="https://randomuser.me/api/portraits/men/46.jpg"
      />
      <ProfilUser
        nom="Charlie"
        age={22}
        ville="New York"
        photo="https://randomuser.me/api/portraits/men/47.jpg"
      />

      </div>
      <div className="flex justify-center">
         <FormulaireNom/>
      </div>
      <div className="flex justify-center">
         <Compteur />
      </div>
       <div className="mx-auto max-w-4xl">
          <TodoList/>
       </div>
      <div>

        <div>
          <UseEffectBase/>
        </div>
        <div>
          <ExempleAvecDependance/>
        </div>

    <footer className="text-center p-4 mt-5 border-t border-gray-300">
      <p className="text-gray-600">&copy; 2024 Mon Application React. Tous droits réservés.</p>
    </footer>

      </div>
    
    </>
  </div>
);   
 
}
