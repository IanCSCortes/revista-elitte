import "./SmallArticleCard.css";

function SmallArticleCard({ article }) {
    return(

        <article className="small-card">

            <img
                src={article.image}
                alt={article.title}
            />

            <div className="small-card-content">

                <span className="small-card-category">
                    {article.category}
                </span>

                <h3 className="small-card-title">
                    {article.title}
                </h3>

                <span className="small-card-author">
                    por {article.author}
                </span>

            </div>

        </article>

    );

}

export default SmallArticleCard;