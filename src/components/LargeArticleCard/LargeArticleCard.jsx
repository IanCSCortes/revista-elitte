import "./LargeArticleCard.css";

function LargeArticleCard({ article }) {
    return(

        <article className="large-card">

            <img
                src={article.image}
                alt={article.title}
            />

            <span className="large-card-category">
                {article.category}
            </span>

            <h3 className="large-card-title">
                {article.title}
            </h3>

            <span className="large-card-author">
                por {article.author}
            </span>

        </article>

    );

}

export default LargeArticleCard;