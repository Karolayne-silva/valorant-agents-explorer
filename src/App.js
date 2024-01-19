import Agents from "./componentes/Agents";
import React, { useEffect, useState } from "react";
import Header from "./componentes/Header";
import valorant from "./img/nome valorant.png";
import lupa from "./img/icone-lupa.svg";
import Footer from "./componentes/Footer";

function App() {
  const [data, setData] = useState([]);
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    fetch("https://valorant-api.com/v1/agents?isPlayableCharacter=true")
      .then((response) => response.json())
      .then((json) => setData(json.data));
    setInitialData(data);
  }, []);

  /*  console.log(initialRepo);
  function buscaFiltro(valor) {
    const filter = data.filter((agente) => agente.displayName.toLowerCase().startsWith(valor.toLowerCase()));
    setData(filter);
  } */

  function handleChange(event) {
    const valor = event.target.value;
    if (!valor) {
      setData(initialData);
      
    }

    const filterData = data.filter((agente) =>
      agente.displayName.toLowerCase().includes(valor.toLowerCase())
    );
    setData(filterData);
  }

  return (
    <div style={{ backgroundColor: "#0F1823" }}>
      <Header />
      <div className="main">
        <img src={valorant} alt="nome valorant" />

        <form>
          <input
            type="text"
            name="name"
            placeholder="Procurar agentes..."
            onChange={handleChange}
          />
          <div>
            <img src={lupa} />
          </div>
        </form>
      </div>
      {data && <Agents dado={data} />}
      <Footer />
    </div>
  );
}

export default App;
