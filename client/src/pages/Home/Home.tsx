import Title from "../../components/Header/Title";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import AllCards from "../../containers/AllCards/AllCards";
import Banner from "../../components/Banner/Banner";
import image from "../../assets/bannerHome.webp";

const HomePage: React.FunctionComponent = () => {
  
  return (
    <>
      <Title title='Home' />
      <Header />
      <main className="_container">
        <Banner image={image} text1="Chez vous," text2=" partout et ailleurs" />
        <AllCards />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
