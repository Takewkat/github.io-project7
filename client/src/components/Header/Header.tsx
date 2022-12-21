import './header.scss';
import { useLocation, Link } from "react-router-dom";
import { ReactComponent as LogoHeader } from '../../assets/logoHeader.svg';

function Header () {
  //assigning location variable
  const location = useLocation();
  //destructuring pathname from location
  const { pathname } = location;
  //split method to get the name of the path in array
  const splitLocation = pathname.split("/");
  
  return (
    <header className="header">
      <div className="header__container _container">
        <Link to="/" className="header__title-link">
          <h1 className="header__title">K<LogoHeader className="header__title-svg"/>sa</h1>
        </Link> 
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