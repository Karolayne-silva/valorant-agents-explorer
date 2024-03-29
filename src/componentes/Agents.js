import CardAgente from "./CardAgente";

export default function Agente({ dado }) {
  return (
    <div className="listaAgentes">
      {dado.map((agente, index) => (
        <CardAgente
          card={agente.displayIconSmall}
          key={agente.uuid}
          nome={agente.displayName}
          imgAgente={agente.bustPortrait}
          background={agente.background}
          id={agente.uuid}
        />
      ))}
    </div>
  );
}
