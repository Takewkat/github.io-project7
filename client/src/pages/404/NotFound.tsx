import Title from "../../components/Header/Title";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import './notfound.scss';

const NotFound: React.FunctionComponent = () => {

  return (
    <>
      <Title title='404' />
      <Header />
      <main className="notfound _container"> 
        <h2 className="notfound__title">404</h2>
        <div className="notfound__text">Oups! La page que vous demandez n'existe pas.</div>
        <a href="/" className="notfound__link">Retourner sur la page d'accueil</a>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
