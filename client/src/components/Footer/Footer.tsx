import React from "react";
import './footer.scss';
import { ReactComponent as LogoFooter } from '../../assets/logoFooter.svg';

const Footer: React.FunctionComponent = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h2 className="footer__title">K <LogoFooter className="footer_svg"/> s a </h2>
      </div>
    </footer>
  );
}

export default Footer;