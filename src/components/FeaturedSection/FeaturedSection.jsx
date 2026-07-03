import "./FeaturedSection.css";
import LargeArticleCard from "../LargeArticleCard/LargeArticleCard";

function FeaturedSection() {
    return(

        <section className="featured-section">

            <div className="featured-left">

                <LargeArticleCard />

                <LargeArticleCard />

            </div>

            <div className="featured-right">

            </div>

        </section>

    );

}

export default FeaturedSection;