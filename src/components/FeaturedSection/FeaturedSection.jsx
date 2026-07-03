import "./FeaturedSection.css";
import LargeArticleCard from "../LargeArticleCard/LargeArticleCard";
import SmallArticleCard from "../SmallArticleCard/SmallArticleCard";

function FeaturedSection() {
    return(

        <section className="featured-section">

            <div className="featured-left">

                <LargeArticleCard 
                
                    category="Negócios"
                    title="Como a IA está mudando o mercado"
                    author="Ian Cortes"
                    image="https://picsum.photos/500/350"

                />

                <LargeArticleCard 
                
                    category="Tecnologia"
                    title="As tendências para o desenvolvimento web em 2026"
                    author="Revista Elitte"
                    image="https://picsum.photos/501/350"
                
                />

            </div>

            <div className="featured-right">

                <SmallArticleCard />

                <SmallArticleCard />

            </div>

        </section>

    );

}

export default FeaturedSection;