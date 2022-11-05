import Title from "../../components/Header/Title";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const NotFound: React.FunctionComponent = () => {

  return (
    <>
      <Title title='404' />
      <Header />
      <main> 
        <h1>404</h1>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
