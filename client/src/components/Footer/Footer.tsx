import { Link } from 'react-router-dom';

import './footer.scss';
import { ReactComponent as LogoFooter } from '../../assets/logoFooter.svg';

function Footer () {
  return (
    <footer className="footer">
      <div className="footer__container _container">
        <Link to="/" className="footer__title-link">
          <h2 className="footer__title">K<LogoFooter className="footer__title-svg"/>sa</h2>
        </Link> 
        <p className="footer__text">© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;