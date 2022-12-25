import { useState } from "react";
import Arrow from "./Arrow";
import "./accordion.scss";

interface Props {
  title: string;
  children: string | string[];
  cardStyle?: boolean;
}

function Accordion ({
  title, 
  children,
  cardStyle,
}: Props){
  const [active, setActive] = useState(true);

  function toggleAccordion() {
    setActive(!active);
  }

  return (
    <div className={`accordion__section ${active} ${cardStyle ? "accordion__section-card__page" : ""}`} >
      <button 
        className={`accordion ${active} ${cardStyle ? "accordion-card__page" : "accordion-about__page"}`} 
        onClick={toggleAccordion}
      >
        <div 
          className={`accordion__title ${cardStyle ? "accordion__title-small" : ""}`} 
        >{title}</div>
        <Arrow 
          className={`${active ? "accordion__icon" : "accordion__icon rotate"}`} 
          width={25} fill={"#FFF"} />
      </button>
      <div
        className={`accordion__content ${cardStyle ? "accordion__content-card__page" : ""}`}
        style={active ? undefined : { display: "none"} }
      >
        {
          typeof children === "string" 
          ? <div className={`accordion__text ${cardStyle ? "accordion__text-small" : ""}`}>{children}</div>
          : children.map((item, index) => 
            <div 
              key={index}
              className={`accordion__text ${cardStyle ? "accordion__text-small" : ""}`}
            >
              <ul>{item}</ul>
            </div>)
        }
      </div>
    </div>
  );
}

export default Accordion;