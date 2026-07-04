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
                
                <span>
                    © 2026 Editora & Revista Elitte Ltda.
                </span>

            </div>

        </footer>

    );
}

export default Footer;