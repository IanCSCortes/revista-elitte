import "./Layout.css";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Layout ({ children }) {

    return (

        <div className="layout">

            <Header />
            
            <Navbar />

            <main>
                {children}
            </main>

            <Footer />

        </div>

    );

}

export default Layout;