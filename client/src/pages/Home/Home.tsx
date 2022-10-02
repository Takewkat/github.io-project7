import Title from "../../components/Header/Title";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import AllCards from "../../containers/AllCards/AllCards";

const HomePage: React.FunctionComponent = () => {

  return (
    <>
      <Title title={('Home')} />
      <Header />
      <AllCards />
      <Footer />
    </>
  );
};

export default HomePage;
