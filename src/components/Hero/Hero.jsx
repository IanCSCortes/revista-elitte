import "./Hero.css";

function Hero() {
    return (
        <section className="hero">

            <div className="hero-text">

                <span className="category">
                    NEGÓCIOS
                </span>

                <h2>
                    Como a IA está transformando o mercado brasileiro
                </h2>

                <p>
                    Uma análise sobre como pequenas empresas estão utilizando Inteligência
                    Artificial para crescer.
                </p>

                <button>
                    Ler matéria
                </button>

            </div>

            <div className="hero-image">

                <img 
                src="http://picsum.photos/700/500"
                alt="Imagem destaque"
                />

            </div>

        </section>
    );
}

export default Hero;