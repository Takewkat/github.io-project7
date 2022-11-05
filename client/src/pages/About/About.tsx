import Title from "../../components/Header/Title";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import image from "../../assets/bannerAbout.webp";
import about from "../../services/about.json";
import Accordion from "../../components/CardInfo/Dropdown/Accordion";

// Step 1: Load the data from the json file

//TO DO
// Step 2: + Loader (spinner) + Error message
// Step 3: Lazy loading

const About: React.FunctionComponent = () => {
  //const [loading, setLoading] = React.useState(true);
  //const [error, setError] = React.useState(false);
  //const [data, setData] = React.useState(cards);

  return (
    <>
      <Title title='A Propos' />
      <Header />
      <main className="_container"> 
        <Banner image={image} style={{ margin: '24px auto' }}/>
        <section>
          {about.map((item) => (
            <Accordion
              key={item.id}
              title={item.title}
              text={item.text}
            />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;