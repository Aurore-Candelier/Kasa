import './Header.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className= 'kasa-banner'>
                <img src={logo} alt='logo Kasa' className='logo-kasa' />
                <ul>
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                    <Link to="/About">A propos</Link>
                    </li>
                </ul>
            </div>

        </header>
    );
}

export default Header;