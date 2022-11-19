import React, { useState } from "react";
import Arrow from "./Arrow";
import "./accordion.scss";

interface Props {
  title: string;
  text: string | string[];
}

const Accordion: React.FunctionComponent<Props> = ({title, text}) => {
  const [active, setActive] = useState(false);

  function toggleAccordion() {
    setActive(!active);
  }

  return (
    <div className="accordion__section">
      <button className={`accordion ${active}`} onClick={toggleAccordion}>
        <div className="accordion__title">{title}</div>
        <Arrow className={`${active ? "accordion__icon" : "accordion__icon rotate"}`} width={25} fill={"#FFF"} />
      </button>
      <div
        className="accordion__content"
        style={active ? undefined : { display: "none"} }
      >
        {
        typeof text === "string" 
        ? <div className="accordion__text">{text}</div>
        : text.map((item, index) => <div key={index} className="accordion__text"><ul>{item}</ul></div>)}
      </div>
    </div>
  );
}

export default Accordion;