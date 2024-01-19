import imgValorant from "../img/image 4.png";
export default function Agente({ nome, imgAgente, background }) {
  return (
    <div className="cardAgente">

      <div className="overlay">
        <button className="btn-overlay">
          <img src={imgValorant} />
        </button>
        <p>Mais</p>
      </div>
      
      <div className="imgAgente">
        <img className="img1" src={imgAgente} alt="imagem do agente" />
        <img className="img2" src={background} alt="nome do agente" />
      </div>

      <div className="fundoTitulo">
        <h1>{nome}</h1>
      </div>

    </div>
  );
}
