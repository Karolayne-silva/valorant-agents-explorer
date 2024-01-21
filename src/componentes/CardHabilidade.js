import img from "../img/image 30.png";
export default function CardHabilidade(){
    return(
        <div className="cardHabilidade">
            <div className="nome">
                <img src={img} alt=""/>
                <h1>Wingonn</h1>
            </div>
            <div className="descricao">
                <p>EQUIPE Wingman. DISPARE para enviá-lo para encontrar inimigos. Wingman lança uma forte explosão na direção do primeiro inimigo que vê. Use o DISPARO ALTERNATIVO na direção de um ponto ou Spike plantada para que Wingman plante ou desarme a Spike. Para plantar, Gekko deve estar com a Spike no inventário. Quando Wingman expira, ele se transforma em um glóbulo inativo. INTERAJA para recuperar o glóbulo e ganhar outra carga de Wingman após um curto período.</p>
            </div>
            <span className="letra">C</span>
        </div>
    )
}