import { useEffect, useState } from "react";

export default function ListePosts(){
    const[posts , setPosts] = useState([])
    const[chargement , setChargement] = useState(true);

    // nous allons utiliser async/await

    useEffect(()=>{
        const chargerPosts = async () => {
        try {
            // on charge l'api
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            // on convertir la response en json
            const data = await response.json()
            // il faut mettre le post à jour et on recupère 10 posts
            setPosts(data.slice(0 , 10));
            // on arrete le chargement
            setChargement(false);
            
        } catch (error) {
            console.error('Erreur:', error);
            // on arrete le chargement
            setChargement(false);
            
            
        }
    };
      chargerPosts();
    }, []);

    return(
       <div className="p-7">
          <h2 className="text-center text-3xl">📝 Derniers posts</h2>

          <div>
            {chargement && <div className="text-orange-500 text-center">⏳ Chargement des posts...</div>}
            {
                posts.map(post => (
                    <div key={post.id} className="border border-gray-300 p-4 my-2.5 rounded-lg">
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>

                    </div>
                ))
            }
          </div>
       </div>
    )
}