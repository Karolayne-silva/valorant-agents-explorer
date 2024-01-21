import Footer from "../../componentes/Footer/Footer";
import Header from "../../componentes/Header/Header";
import "../Agente/agente.css";
import habilidade from '../../img/image 29.png';
import CardHabilidade from "../../componentes/CardHabilidade";
import gekko from "../../img/image 31.png";

export default function Agente(){
    return(
        <>
            <Header />
            <main className="main">
                <section className="fundo-titulo">
                    <h1>Gekko</h1>
                </section>
                <section className="info-agente">
                    <p>"Gekko the Angeleno leads a tight-knit crew of calamitous creatures. His buddies bound forward, scattering enemies out of the way, with Gekko chasing them down to regroup and go again."</p>
                    <div className="role">
                        <img src={habilidade} alt=""/>
                        <span>Initial</span>
                    </div>

                </section>
                <section className="imgs">
                    
                    <div className="img-agente">
                        <img src={gekko} alt=""/>
                        <div className="paleta">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </section>
                <section className="habilidades">
                    <CardHabilidade/>
                    <CardHabilidade/>
                    <CardHabilidade/>
                    <CardHabilidade/>
                </section>

            </main>
            <Footer />
        </>
    )
}