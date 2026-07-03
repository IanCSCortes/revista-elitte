import "./LargeArticleCard.css";

function LargeArticleCard() {
    return(

        <article className="large-card">

            <img
                src="https://picsum.photos/500/350"
                alt="Matéria"
            />

            <span className="large-card-category">
                NEGÓCIOS
            </span>

            <h3 className="large-card-title">
                Como a Inteligência Artificial está mudando o mercado
            </h3>

            <span className="large-card-author">
                por Ian Cortes
            </span>

        </article>

    );

}

export default LargeArticleCard;