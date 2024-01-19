import CardAgente from "./CardAgente";

export default function Agente({ dado}) {
  return (
    <div className="listaAgentes">
      {dado.map((agente) => (
        <CardAgente
          nome={agente.displayName}
          imgAgente={agente.bustPortrait}
          background={agente.background}
        />
      ))}
    </div>
  );
}
