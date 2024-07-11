import './Header.css';
import logo from '../../assets/logo.png';

const Header = () => {
    return (
        <header>
            <div className= 'kasa-banner'>
                <img src={logo} alt='logo Kasa' className='logo-kasa' />
                <ul>
                    <li><a href="#">Accueil</a></li>
                    <li><a href="#">A Propos</a></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;