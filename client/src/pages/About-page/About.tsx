import Title from "../../components/Header/Title";

import Banner from "../../components/Banner/Banner";
import image from "../../assets/bannerAbout.webp";
import Accordion from "../../components/Dropdown/Accordion";

import * as APIService from "../../services/infoAPI";
import { IInfoModel } from "../../models/InfoModel";
import { useEffect, useState } from "react";

import ErrorMessage from "../../containers/ErrorsMessage";

function About () {

  const [data, setData] = useState<IInfoModel>([]);

  useEffect(() => {
    APIService.getAbout().then(data => setData(data));
  }, []);

  return (
    <>
      <Title title='A Propos' />
      <main className="_container"> 
        <Banner image={image} />
        <section>
          { data 
            ? <>
            {data.map((item) => (
              <Accordion
                key={item.id}
                title={item.title}
                children={item.text}
              />
            ))}
            </>
            : <ErrorMessage message="Desolé, nous n'avons pas pu charger les informations. Veuillez réeessayer plus tard" /> 
          }
        </section>
      </main>
    </>
  );
};

export default About;