import Title from "../../components/Header/Title";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import AllCards from "../../containers/AllCards/AllCards";
import Wallpaper from "../../components/Wallpaper/Wallpaper";

const HomePage: React.FunctionComponent = () => {

  return (
    <>
      <Title title={('Home')} />
      <Header />
      <main>
        <Wallpaper />
        <AllCards />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
