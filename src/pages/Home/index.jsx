import Agents from "../../componentes/Agents";
import React, { useEffect, useState } from "react";
import valorant from "../../img/nome valorant.png";
import lupa from "../../img/icone-lupa.svg";
import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";
import "../Home/home.css";
import CardSkeleton from "../../componentes/CardSkeleton";



export default function Home() {
  const [datas, setData] = useState([]);
  const [initialData, setInitialData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    async function fetchApi() {
      const response = await fetch(
        "https://valorant-api.com/v1/agents?isPlayableCharacter=true"
      );
      const json = await response.json();
      setData(json.data);
      setInitialData(json.data);
      setIsLoading(false)
    }
    fetchApi();
  }, []);

  function handleChange(event) {
    const valor = event.target.value;
    if (!valor) {
      setData(initialData);
      return;
    }

    const filterData = datas.filter((agente) =>
      agente.displayName.toLowerCase().includes(valor.toLowerCase())
    );
    setData(filterData);
  }
  return (
    <>
      <Header />
      <div className="main-home">
        <img src={valorant} alt="nome valorant" width="900" height="130"/>

        <form>
          <input
            type="text"
            name="name"
            placeholder="Procurar agentes..."
            onChange={handleChange}
          />
          <div>
            <img src={lupa} alt="icone de lupa"/>
          </div>
        </form>
      </div>
      {isLoading && !datas.length ? <CardSkeleton/> : <Agents dado={datas} />}
      
      <Footer />
    </>
  );
}
