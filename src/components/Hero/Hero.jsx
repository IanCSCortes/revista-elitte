import "./Hero.css";

import img from "../../assets/images/imgteste3.webp"

function Hero() {
    return (
        <section className="hero">

            <div className="hero-text">

                <span className="category">
                    NEGÓCIOS
                </span>

                <h2>
                Prêmio Os Mais Influentes de 2024.
                </h2>

                <p>
                Reconhecendo a liderança e a inspiração na sociedade lavrense Em mais um ano de celebração,
                 a Revista Elitte realizou no dia 26 de outubro, no Lavras Hall, a tradicional premiação 
                 “Os Mais Influentes do Ano”, reunindo..
                </p>

                <button>
                    Ler matéria
                </button>

            </div>

            <div className="hero-image">

                <img 
                src={img}
                alt="Imagem destaque"
                />

            </div>

        </section>
    );
}

export default Hero;