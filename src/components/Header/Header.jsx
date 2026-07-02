import './Header.css';

import { FiMenu} from "react-icons/fi";
import { FiSearch } from "react-icons/fi";

function Header() {
    return (

        <header className="header">
            <button className="icon-button">
                <FiMenu />
            </button>

            <div className="logo">
                <h1>REVISTA ELITTE</h1>
                <span>MODA • NEGÓCIOS • CULTURA</span>
            </div>

            <button className="icon-button">
                <FiSearch />
            </button>
        </header>
    );
    
}

export default Header;