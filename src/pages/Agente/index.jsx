import Footer from "../../componentes/Footer/Footer";
import Header from "../../componentes/Header/Header";
import "../Agente/agente.css";
import CardHabilidade from "../../componentes/CardHabilidade";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Agente() {
  const { id } = useParams();
  const [dataAgente, setDataAgente] = useState([]);

  useEffect(() => {
    async function fetchApi() {
      const response = await fetch(
        `https://valorant-api.com/v1/agents/${id}?isPlayableCharacter=truelanguage='pt-BR'`
      );
      const json = await response.json();
      setDataAgente(json.data);
    }
    fetchApi();
  }, [id]);

  return (
    <>
      <Header />
      <main className="main">
        <section className="fundo-titulo">
          <h1>{dataAgente.displayName}</h1>
        </section>

        <section className="info-agente">
          <p>{dataAgente.description}</p>
          <div className="role">
            {/* <img src={dataAgente.role.displayIcon} alt="" />
            <span>{dataAgente.role.displayName}</span> */} 
          </div>
        </section>

        <section className="imgs">
          <div className="img-agente">
            <img src={dataAgente.fullPortrait} alt="" />
            <div className="paleta">
                 {dataAgente.backgroundGradientColors.map((cor, index) => (
                <div key={index} style={{ backgroundColor: `#${cor}` }}></div>
              ))}    
            </div>
          </div>
        </section>

        <section className="habilidades">
             {dataAgente.abilities.map((habilidade, index) => (
            <CardHabilidade
              key={index}
              img={habilidade.displayIcon}
              nome={habilidade.displayName}
              descricao={habilidade.description}
            />
          ))}   
        </section>
      </main>

      <Footer />
    </>
  );
}
