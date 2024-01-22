
export default function CardHabilidade({img, nome, descricao}){
    return(
        <div className="cardHabilidade">
            <div className="nome">
                <img src={img} alt=""/>
                <h1>{nome}</h1>
            </div>
            <div className="descricao">
                <p>{descricao}</p>
            </div>
            <span className="letra">C</span>
        </div>
    )
}