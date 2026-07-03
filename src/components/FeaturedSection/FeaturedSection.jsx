import "./FeaturedSection.css";
import LargeArticleCard from "../LargeArticleCard/LargeArticleCard";
import SmallArticleCard from "../SmallArticleCard/SmallArticleCard";
import article from "../../data/articles";

function FeaturedSection() {
    return(

        <section className="featured-section">

            <div className="featured-left">

                {article.featured.map((articles) => (

                    <LargeArticleCard 

                        key={articles.id}
                        category={articles.category}
                        title={articles.title}
                        author={articles.author}
                        image={articles.image}

                    />

                ))}

            </div>

            <div className="featured-right">

                <SmallArticleCard />

                <SmallArticleCard />

            </div>

        </section>

    );

}

export default FeaturedSection;