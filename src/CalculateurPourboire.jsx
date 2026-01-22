import { useState } from "react";

export default function CalculateurPourboire() {
  const [montant, setMontant] = useState('');
  const [pourcentage, setPourcentage] = useState(10);
  
  const pourboire = (parseFloat(montant) || 0) * (pourcentage / 100);
  const total = (parseFloat(montant) || 0) + pourboire;
  
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md space-y-6">
  <h2 className="text-2xl font-bold text-center text-gray-800">💰 Calculateur de Pourboire</h2>
  
  <div className="space-y-2">
    <label className="block text-sm font-medium text-gray-700">Montant de l'addition (FCFA)</label>
    <input 
      type="number"
      value={montant}
      onChange={(e) => setMontant(e.target.value)}
      placeholder="Ex: 5000"
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
    />
  </div>
  
  <div className="space-y-2">
    <label className="block text-sm font-medium text-gray-700">Pourboire: {pourcentage}%</label>
    <input 
      type="range"
      min="0"
      max="30"
      value={pourcentage}
      onChange={(e) => setPourcentage(Number(e.target.value))}
      className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer slider"
    />
  </div>
  
  <div className="bg-gray-50 p-4 rounded-lg space-y-2">
    <p className="text-gray-700">Montant: <span className="font-semibold">{montant || 0} FCFA</span></p>
    <p className="text-gray-700">Pourboire ({pourcentage}%): <span className="font-semibold">{pourboire.toFixed(0)} FCFA</span></p>
    <p className="text-lg font-bold text-green-600">Total: {total.toFixed(0)} FCFA</p>
  </div>
</div>   
  );
}