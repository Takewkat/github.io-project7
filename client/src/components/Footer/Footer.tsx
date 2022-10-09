import React from "react";
import './footer.scss';
import { ReactComponent as LogoFooter } from '../../assets/logoFooter.svg';

const Footer: React.FunctionComponent = () => {
  return (
    <footer className="footer">
      <div className="footer__container _container">
        <a href="/" className="footer__title-link"><h2 className="footer__title">K <LogoFooter className="footer__title-svg"/> s a </h2></a>   
        <p className="footer__text">© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;