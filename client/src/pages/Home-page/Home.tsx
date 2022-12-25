import Title from "../../components/Header/Title";

import AllCards from "../../containers/AllCards/AllCards";
import Banner from "../../components/Banner/Banner";
import image from "../../assets/bannerHome.webp";

function HomePage () {
  return (
    <>
      <Title title='Home' />
      <main className="_container">
        <Banner 
          image={image} 
          text1="Chez vous," 
          text2=" partout et ailleurs"
          mainPageStyle />
        <AllCards />
      </main>
    </>
  );
};

export default HomePage;
