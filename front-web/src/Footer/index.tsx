import './styles.css';
import {ReactComponent as Youtube} from './youtube.svg';
import {ReactComponent as Linkedin} from './linkedin.svg';
import {ReactComponent as Instagram} from './instagram.svg';

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.youtube.com/channel/UCYJW2oOAV_OZzaBtMIzgvJQ" target="_new">
                    <Youtube />
                </a>
                <a href="https://www.linkedin.com/in/erick-henrique-silva-b998291b8/" target="_new">
                    <Linkedin />
                </a>
                <a href="https://www.instagram.com/predaloiro/" target="_new">
                    <Instagram />
                </a>
            </div>
        </footer>
    )

}

export default Footer;