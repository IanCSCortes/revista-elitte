import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import FeaturedSection from "../components/FeaturedSection/FeaturedSection";
import Layout from "../components/Layout/Layout";

function Home() {

    return (
        <Layout>
        
            <Header />
            <Navbar />
            <Hero />
            <FeaturedSection />

        </Layout>
    );
}

export default Home;