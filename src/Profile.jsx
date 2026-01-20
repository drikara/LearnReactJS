import { getImageUrl } from './Utils';

function Profile({
    name,
    imageId,
    profession,
    awards,
    discoveries
}) {
    return (
        <section className="profile">
            <h2>{name}</h2>
            <img
                className="avatar"
                src={getImageUrl(imageId)}
                alt={name}
                width={70}
                height={70}
            />
            <ul>
                <li>
                    <b>Profession : </b>
                    {profession}
                </li>
                <li>
                    <b>Récompenses : {awards} </b>
                    (Prix Nobel de Physique, Prix Nobel de Chimie, Médaille Davy, Médaille Matteucci)
                </li>
                <li>
                    <b>A découvert : </b>
                    {discoveries}
                </li>
            </ul>
        </section>
    );
}

export default function Gallery() {
  return (
    <div>
      <h1>Scientifiques remarquables</h1>
      <Profile
        imageId="YfeOqp2"
        name="Katsuko Saruhashi"
        profession="géochimiste"
        awards="2"
        discoveries="une méthode de mesure du dioxyde de carbone dans l’eau de mer"
      />
      <Profile
        imageId="1bX5QH6"
        name="Tu Youyou"
        profession="pharmacologue"
        awards="3"
        discoveries="l’artémisinine et la dihydroartémisinine"
      />
      <Profile
        imageId="oGJRIzO"
        name="Marie Curie"
        profession="physicienne et chimiste"
        awards="5"
        discoveries="le polonium et le radium"
      />  
    </div>
  );
}
