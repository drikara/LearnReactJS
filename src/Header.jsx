export default function Header(){
    return(
        <header className="p-3 bg-blue-500 text-white flex justify-between items-center">
            <h1>Mon Application React</h1>
            <nav className="flex gap-4 ">
                <a href="#accueil" className="hover:text-amber-300">Accueil</a>
                <a href="#a-propos" className="hover:text-amber-300">Apropos</a>
                <a href="#contact" className="hover:text-amber-300">Contact</a>
            </nav>
        </header>
    )
}


