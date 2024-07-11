import './Footer.css';
import logo from '../../assets/LOGO-white.png';

function Footer() {
    return (
        <footer>
            <div className= 'banner-footer'>
                    <div className='logo-text'>
                        <img src={logo} alt='logo Kasa' className='logo-kasa' />
                        <p>© 2020 Kasa. All rights reserved</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;