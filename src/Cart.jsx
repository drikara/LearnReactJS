export default function Cart({titre, description}){
    return(
        <div className="p-4 border-2 border-gray-300 mt-5 w-100 mx-2.5 max-w-md mb-3 rounded-2xl">
        <h3>{titre}</h3>
        <p>{description}</p>
        </div>

    )
}