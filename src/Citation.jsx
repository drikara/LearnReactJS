import { useState, useEffect } from 'react';

export default function CitationAleatoire() {
  const [citation, setCitation] = useState(null);
  const [chargement, setChargement] = useState(false);
  
  const chargerCitation = () => {
    setChargement(true);
    fetch('https://api.quotable.io/random')
      .then(res => res.json())
      .then(data => {
        setCitation(data);
        setChargement(false);
      });
  };
  
  useEffect(() => {
    chargerCitation();
  }, []);
  
  return (
    <div className='max-w-md mx-auto p-4 border border-gray-300 rounded'>
      {chargement ? (
        <p >Chargement...</p>
      ) : citation ? (
        <div>
          <blockquote className='italic border-l-4 border-gray-300 pl-4'>
            "{citation.content}"
          </blockquote>
          <p className='text-right'>— {citation.author}</p>
        </div>
      ) : null}
      
      <button onClick={chargerCitation} className='mt-4 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600'>
        Nouvelle citation
      </button>
    </div>
  );
}