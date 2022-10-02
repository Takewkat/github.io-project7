import Title from "../../components/Header/Title";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const About: React.FunctionComponent = () => {

  return (
    <>
      <Title title={('A Propos')} />
      <Header />
      <main> 
        <h1>1 Step: Set up About</h1>
      </main>
      <Footer />
    </>
  );
};

export default About;