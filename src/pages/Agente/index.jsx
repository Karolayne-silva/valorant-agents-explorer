import Footer from "../../componentes/Footer/Footer";
import Header from "../../componentes/Header/Header";
import "../Agente/agente.css";
import CardHabilidade from "../../componentes/CardHabilidade";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Agente() {
  const { id } = useParams();
  const [dataAgente, setDataAgente] = useState([]);

  console.log(id);

  useEffect(() => {
    async function fetchApi() {
      try {
        const response = await fetch(
          `https://valorant-api.com/v1/agents/${id}?isPlayableCharacter=true&language=pt-BR`
        );
        const json = await response.json();
        setDataAgente(json.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchApi();
  }, [id]);

  const letras = ["C", "Q", "E", "X"];
  return (
    <>
      <Header />
      <main className="main">
        <section className="fundo-titulo">
          <h1>{dataAgente?.displayName}</h1>
        </section>

        <section className="info-agente">
          <p>{dataAgente?.description}</p>
          <div className="role">
            <img src={dataAgente?.role?.displayIcon} alt="" />
            <span>{dataAgente?.role?.displayName}</span>
          </div>
        </section>

        <section className="imgs">
          <div className="img-agente">
            <img src={dataAgente?.fullPortrait} alt="" />
            <div className="paleta">
            {dataAgente?.backgroundGradientColors?.map((cor, index) => (
              <div key={index} style={{ backgroundColor: `#${cor}` }}></div>
            ))}
          </div>
          </div>
          
        </section>

        <section className="habilidades">
          {dataAgente?.abilities
            ?.filter((habilidade) => habilidade.slot !== "Passive")
            .map((habilidade, index) => (
              <CardHabilidade
                key={index}
                img={habilidade.displayIcon}
                nome={habilidade.displayName}
                descricao={habilidade.description}
                letra={letras[index]}
              />
            ))}
        </section>
      </main>

      <Footer />
    </>
  );
}
