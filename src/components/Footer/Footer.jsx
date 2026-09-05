import "./Footer.css";
import Logo from "../../assets/images/logo-elitte-branco.webp"

function Footer() {
    return(

        <footer className="footer">

            <div className="footer-container">

                <img className="logo-footer" src={Logo} alt="Logo elitte" />

                <p>
                    A revista que conta o Sul de Minas. 
                </p>

                <p>
                    Desde 1999, em Lavras.
                </p>

                <nav className="footer-links" aria-label="Link do rodapé">
                    <a href="#">A Revista</a>
                    <a href="#">Leia Online</a>
                    <a href="#">Elitte Podcast</a>
                    <a href="#">Eventos</a>
                    <a href="#">Contato</a>
                </nav>
                
                <span>
                    © 2026 Editora & Revista Elitte Ltda.
                </span>

            </div>

        </footer>

    );
}

export default Footer;