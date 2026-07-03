import "./FeaturedSection.css";
import LargeArticleCard from "../LargeArticleCard/LargeArticleCard";
import SmallArticleCard from "../SmallArticleCard/SmallArticleCard";

function FeaturedSection() {
    return(

        <section className="featured-section">

            <div className="featured-left">

                <LargeArticleCard />

                <LargeArticleCard />

            </div>

            <div className="featured-right">

                <SmallArticleCard />

                <SmallArticleCard />

            </div>

        </section>

    );

}

export default FeaturedSection;