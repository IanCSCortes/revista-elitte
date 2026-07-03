import "./LargeArticleCard.css";

function LargeArticleCard(
   {category,
    title,
    author,
    image}
) {
    return(

        <article className="large-card">

            <img
                src={image}
                alt="Matéria"
            />

            <span className="large-card-category">
                {category}
            </span>

            <h3 className="large-card-title">
                {title}
            </h3>

            <span className="large-card-author">
                por {author}
            </span>

        </article>

    );

}

export default LargeArticleCard;