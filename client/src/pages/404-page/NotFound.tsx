import { Link } from "react-router-dom";
import Title from "../../components/Header/Title";
import "./notfound.scss";

function NotFound() {
  return (
    <>
      <Title title="404" />
      <main className="notfound _container">
        <h2 className="notfound__title">404</h2>
        <div className="notfound__text">Oups! La page que vous demandez n'existe pas.</div>
        <Link to="/" className="notfound__link">
          Retourner sur la page d'accueil
        </Link>
      </main>
    </>
  );
}

export default NotFound;
