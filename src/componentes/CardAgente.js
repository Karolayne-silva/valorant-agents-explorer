import { Link } from "react-router-dom";
import imgValorant from "../img/image 4.png";
export default function Agente({ nome, imgAgente, background, id }) {
  return (
    <div className="cardAgente">
      <div className="overlay">
        <Link to={`/agente/${id}`} className="btn-overlay">
          <img src={imgValorant} alt="icone do valorant" />
        </Link>
      </div>

      <div className="imgAgente">
        <img
          className="img1"
          src={imgAgente}
          alt="imagem do agente"
          width="2048"
          height="1860"
        />
        <img
          className="img2"
          src={background}
          alt="nome do agente"
          width="700"
          height="1024"
        />
      </div>

      <div className="fundoTitulo">
        <h1>{nome}</h1>
      </div>
    </div>
  );
}
