import React from "react";
import "./banner.scss";

interface Props {
  image: string;
  text1?: string;
  text2?: string;
  mainPageStyle?: boolean;
}

function Banner({ 
  image, 
  text1, 
  text2, 
  mainPageStyle 
}: Props) {
  return (
    <div className={`banner ${mainPageStyle ? "banner-main__page" : ""}`} >
      <img src={image} alt="bannerImage" className="banner__image"></img>
      {text1 && <h1 className="banner__text1">{text1}</h1>}
      {text2 && <h1 className="banner__text2">{text2}</h1>}
    </div>
  );
}

export default Banner;