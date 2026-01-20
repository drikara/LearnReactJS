
import Profile from "./Profile.jsx";
export default function Gallery() {
  return (
    <section className="p-8">
      <h1 className="text-2xl font-bold">Scientifique de Renom</h1>
       <div className="flex flex-row gap-5">
           <Profile />
      
       </div>
    </section>
  );
}