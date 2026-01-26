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
import ListeCourses from "./ListeCourses";
import FormulaireUtilisateur from "./FormulaireUtilisateur";
import FormulaireInscription from "./FormulaireInscription";
import CalculateurPourboire from "./CalculateurPourboire";
import ListeUtilisateurs from "./ListeUtilisateurs";
import ListePosts from "./ListesPosts";
import Meteo from "./Meteo";
import FormulaireInscr from "./FormulaireInscr";

export default function App(){
  const nom = "jean";
  const age = 30;
 const fruits = ["pomme", "banane", "orange", "kiwi","Mangue", "Ananas", "Fraise", "Raisin", "Cerise", "Peche"];

return (
  <div className="App">
    <Header />
    <>
   <FormulaireInscr/>
    
   
    <div className="mx-auto max-w-2xl"> 
        <footer className="text-center p-4 mt-5 border-t border-gray-300">
          <p className="text-gray-600">&copy; 2024 Mon Application React. Tous droits réservés.</p>
        </footer>

    </div>
   
    
    </>
  </div>
);   
 
}
