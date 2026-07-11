import './Header.css';
import Logo from "../../assets/images/logo-elitte-branco.webp"

import { HiOutlineMenu} from "react-icons/hi";
import { FiSearch } from "react-icons/fi";

function Header() {
    return (

        <header className="header">

            <div className="container header-content">

                <button className="icon-button menu-button">
                    <HiOutlineMenu />
                </button>

                <div className="logo">
                    <a className="logo-header" href="#">
                        <img src={Logo} alt="" />
                    </a>

                    <span>MODA • NEGÓCIOS • CULTURA</span>
                </div>            

                <button className="icon-button search-button">
                    <FiSearch />
                </button>

            </div>
        </header>
    );
    
}

export default Header;