import React from "react";
import './header.scss';
import { useLocation, Link } from "react-router-dom";
import { ReactComponent as LogoHeader } from '../../assets/logoHeader.svg';

const Header: React.FunctionComponent = () => {
  //assigning location variable
  const location = useLocation();
  //destructuring pathname from location
  const { pathname } = location;
  //split method to get the name of the path in array
  const splitLocation = pathname.split("/");
  
  return (
    <header className="header">
      <div className="header__container _container">
        <a href="/" className="header__title-link"><h1 className="header__title">K<LogoHeader className="header__title-svg"/>s a </h1></a> 
        <div className="header__container-flex">
          <div className={splitLocation[1] === "" ? "header__text header__text-active" : "header__text"}>
            <Link to='/'>Accueil</Link>
          </div>
          <div className={splitLocation[1] === "about" ? "header__text header__text-active" : "header__text"}>
            <Link to='/about'>A Propos</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;