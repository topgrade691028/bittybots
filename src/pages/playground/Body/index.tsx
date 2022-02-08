import React from "react";
import {
  BodyContainer,
  BodyTitle,
  BodyDetail,
  BodyContent,
  BodyItem,
} from "./index.styled";
import Photo1 from "../../../assets/parts/body/04fb74.gif";
import Photo2 from "../../../assets/parts/body/05d4a0.gif";
import Photo3 from "../../../assets/parts/body/09dc9c.gif";
import Photo4 from "../../../assets/parts/body/10c8c0.gif";
import Photo5 from "../../../assets/parts/body/13c9c0.gif";
import Photo6 from "../../../assets/parts/body/14f488.gif";
import Photo7 from "../../../assets/parts/body/15d49a.gif";
import Photo8 from "../../../assets/parts/body/068f53.gif";
import Photo9 from "../../../assets/parts/body/089f7d.gif";
import Photo10 from "../../../assets/parts/body/0117eb.gif";
import Photo11 from "../../../assets/parts/body/1109a6.gif";
import Photo12 from "../../../assets/parts/body/1223de.gif";
import Photo13 from "../../../assets/parts/body/006625.gif";
import Photo14 from "../../../assets/parts/body/021797.gif";
import Photo15 from "../../../assets/parts/body/030535.gif";
import Photo16 from "../../../assets/parts/body/072917.gif";

const Body = () => {
  return (
    <BodyContainer>
      <BodyTitle>
        Body <span>M14 Mercury</span>
      </BodyTitle>
      <BodyDetail>Power: 80</BodyDetail>
      <BodyContent>
        <BodyItem>
          <img src={Photo1} alt="photo" />
        </BodyItem>
        <BodyItem>
          <img src={Photo2} alt="photo" />
        </BodyItem>
        <BodyItem>
          <img src={Photo3} alt="photo" />
        </BodyItem>
        <BodyItem>
          <img src={Photo4} alt="photo" />
        </BodyItem>
        <BodyItem>
          <img src={Photo5} alt="photo" />
        </BodyItem>
        <BodyItem>
          <img src={Photo6} alt="photo" />
        </BodyItem>
        <BodyItem>
          <img src={Photo7} alt="photo" />
        </BodyItem>
        <BodyItem>
          <img src={Photo8} alt="photo" />
        </BodyItem>
        <BodyItem>
          <img src={Photo9} alt="photo" />
        </BodyItem>
        <BodyItem>
          <img src={Photo10} alt="photo" />
        </BodyItem>
        <BodyItem>
          <img src={Photo11} alt="photo" />
        </BodyItem>
        <BodyItem>
          <img src={Photo12} alt="photo" />
        </BodyItem>
        <BodyItem>
          <img src={Photo13} alt="photo" />
        </BodyItem>
        <BodyItem>
          <img src={Photo14} alt="photo" />
        </BodyItem>
        <BodyItem>
          <img src={Photo15} alt="photo" />
        </BodyItem>
        <BodyItem>
          <img src={Photo16} alt="photo" />
        </BodyItem>
      </BodyContent>
    </BodyContainer>
  );
};

export default Body;
