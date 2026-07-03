import "./FeaturedSection.css";
import LargeArticleCard from "../LargeArticleCard/LargeArticleCard";
import SmallArticleCard from "../SmallArticleCard/SmallArticleCard";
import article from "../../data/articles";

function FeaturedSection() {
    return(

        <section className="featured-section">

            <div className="featured-left">

                {article.featured.map((article) => (

                    <LargeArticleCard 

                        key={article.id}
                        article={article}

                    />

                ))}

            </div>

            <div className="featured-right">

                {article.side.map((article) => (

                    <SmallArticleCard
                        key={article.id}
                        article={article}
                    />
                ))}

            </div>

        </section> 

    );

}

export default FeaturedSection;