import "./SmallArticleCard.css";

function SmallArticleCard() {
    return(

        <article className="small-card">

            <img
                src="https://picsum.photos/150/150"
                alt="Matéria"
            />

            <div className="small-card-content">

                <span className="small-card-category">
                    NEGÓCIOS
                </span>

                <a className="small-card-title">
                    Como a IA está mudando o mercado
                </a>

                <span className="small-card-author">
                    por Ian Cortes
                </span>

            </div>

        </article>

    );

}

export default SmallArticleCard;