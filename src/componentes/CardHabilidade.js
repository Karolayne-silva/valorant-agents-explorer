
export default function CardHabilidade({img, nome, descricao, letra}){
    
    return(
        <div className="cardHabilidade">
            <div className="nome">
                <img src={img} alt={`icone do ${nome}`}/>
                <h1>{nome}</h1>
            </div>
            <div className="descricao">
                <p>{descricao}</p>
            </div>
            <span className="letra">{letra}</span>
        </div>
    )
}