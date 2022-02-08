import React from "react";
import {
  HelmetContainer,
  HelmetTitle,
  HelmetDetail,
  HelmetContent,
  HelmetItem,
} from "./index.styled";
import Photo1 from "../../../assets/parts/helmet/07e2db.gif";
import Photo2 from "../../../assets/parts/helmet/09a4d7.gif";
import Photo3 from "../../../assets/parts/helmet/13b730.gif";
import Photo4 from "../../../assets/parts/helmet/034d7f.gif";
import Photo5 from "../../../assets/parts/helmet/040ff8.gif";
import Photo6 from "../../../assets/parts/helmet/0064f8.gif";
import Photo7 from "../../../assets/parts/helmet/069cbe.gif";
import Photo8 from "../../../assets/parts/helmet/100dec.gif";
import Photo9 from "../../../assets/parts/helmet/146a94.gif";
import Photo10 from "../../../assets/parts/helmet/157f0e.gif";
import Photo11 from "../../../assets/parts/helmet/05586a.gif";
import Photo12 from "../../../assets/parts/helmet/08535c.gif";
import Photo13 from "../../../assets/parts/helmet/11594f.gif";
import Photo14 from "../../../assets/parts/helmet/021476.gif";
import Photo15 from "../../../assets/parts/helmet/129227.gif";

const Helmet = () => {
  return (
    <HelmetContainer>
      <HelmetTitle>
        Helmet <span>M02 Shadow King</span>
      </HelmetTitle>
      <HelmetDetail>Power: 40</HelmetDetail>
      <HelmetContent>
        <HelmetItem>
          <img src={Photo1} alt="photo" />
        </HelmetItem>
        <HelmetItem>
          <img src={Photo2} alt="photo" />
        </HelmetItem>
        <HelmetItem>
          <img src={Photo3} alt="photo" />
        </HelmetItem>
        <HelmetItem>
          <img src={Photo4} alt="photo" />
        </HelmetItem>
        <HelmetItem>
          <img src={Photo5} alt="photo" />
        </HelmetItem>
        <HelmetItem>
          <img src={Photo6} alt="photo" />
        </HelmetItem>
        <HelmetItem>
          <img src={Photo7} alt="photo" />
        </HelmetItem>
        <HelmetItem>
          <img src={Photo8} alt="photo" />
        </HelmetItem>
        <HelmetItem>
          <img src={Photo9} alt="photo" />
        </HelmetItem>
        <HelmetItem>
          <img src={Photo10} alt="photo" />
        </HelmetItem>
        <HelmetItem>
          <img src={Photo11} alt="photo" />
        </HelmetItem>
        <HelmetItem>
          <img src={Photo12} alt="photo" />
        </HelmetItem>
        <HelmetItem>
          <img src={Photo13} alt="photo" />
        </HelmetItem>
        <HelmetItem>
          <img src={Photo14} alt="photo" />
        </HelmetItem>
        <HelmetItem>
          <img src={Photo15} alt="photo" />
        </HelmetItem>
        <HelmetItem>
          <img src={Photo5} alt="photo" />
        </HelmetItem>
      </HelmetContent>
    </HelmetContainer>
  );
};

export default Helmet;
