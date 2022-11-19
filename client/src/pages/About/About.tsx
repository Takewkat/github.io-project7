import Title from "../../components/Header/Title";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import Banner from "../../components/Banner/Banner";
import image from "../../assets/bannerAbout.webp";
import Accordion from "../../components/CardInfo/Dropdown/Accordion";

import * as APIService from "../../services/infoAPI";
import { IInfoModel } from "../../models/InfoModel";
import { useEffect, useState } from "react";

import ErrorMessage from "../../containers/ErrorsMessage";

const About: React.FunctionComponent = () => {

  const [data, setData] = useState<IInfoModel>([]);

  useEffect(() => {
    APIService.getAbout().then(data => setData(data));
  }, []);

  return (
    <>
      <Title title='A Propos' />
      <Header />
      <main className="_container"> 
        <Banner image={image} style={{ margin: '24px auto' }}/>
        <section>
          { data 
            ? <>
            {data.map((item) => (
              <Accordion
                key={item.id}
                title={item.title}
                text={item.text}
              />
            ))}
            </>
            : <ErrorMessage message="Desolé, nous n'avons pas pu charger les informations. Veuillez réeessayer plus tard" /> 
          }
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;