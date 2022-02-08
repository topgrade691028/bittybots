import React from "react";
import {
  ArmsContainer,
  ArmsTitle,
  ArmsDetail,
  ArmsContent,
  ArmsItem,
} from "./index.styled";
import Photo1 from "../../../assets/parts/arms/00c57f.gif";
import Photo2 from "../../../assets/parts/arms/01e0d6.gif";
import Photo3 from "../../../assets/parts/arms/04eecb.gif";
import Photo4 from "../../../assets/parts/arms/08eb0e.gif";
import Photo5 from "../../../assets/parts/arms/09f9e0.gif";
import Photo6 from "../../../assets/parts/arms/13b3db.gif";
import Photo7 from "../../../assets/parts/arms/032c56.gif";
import Photo8 from "../../../assets/parts/arms/073f0f.gif";
import Photo9 from "../../../assets/parts/arms/1233da.gif";
import Photo10 from "../../../assets/parts/arms/1402fd.gif";
import Photo11 from "../../../assets/parts/arms/1564d0.gif";
import Photo12 from "../../../assets/parts/arms/020906.gif";
import Photo13 from "../../../assets/parts/arms/051009.gif";
import Photo14 from "../../../assets/parts/arms/061646.gif";
import Photo15 from "../../../assets/parts/arms/104773.gif";
import Photo16 from "../../../assets/parts/arms/117515.gif";

const Arms = () => {
  return (
    <ArmsContainer>
      <ArmsTitle>
        Arms <span>M09 Bakken</span>
      </ArmsTitle>
      <ArmsDetail>Power: 40</ArmsDetail>
      <ArmsContent>
        <ArmsItem>
          <img src={Photo1} alt="photo" />
        </ArmsItem>
        <ArmsItem>
          <img src={Photo2} alt="photo" />
        </ArmsItem>
        <ArmsItem>
          <img src={Photo3} alt="photo" />
        </ArmsItem>
        <ArmsItem>
          <img src={Photo4} alt="photo" />
        </ArmsItem>
        <ArmsItem>
          <img src={Photo5} alt="photo" />
        </ArmsItem>
        <ArmsItem>
          <img src={Photo6} alt="photo" />
        </ArmsItem>
        <ArmsItem>
          <img src={Photo7} alt="photo" />
        </ArmsItem>
        <ArmsItem>
          <img src={Photo8} alt="photo" />
        </ArmsItem>
        <ArmsItem>
          <img src={Photo9} alt="photo" />
        </ArmsItem>
        <ArmsItem>
          <img src={Photo10} alt="photo" />
        </ArmsItem>
        <ArmsItem>
          <img src={Photo11} alt="photo" />
        </ArmsItem>
        <ArmsItem>
          <img src={Photo12} alt="photo" />
        </ArmsItem>
        <ArmsItem>
          <img src={Photo13} alt="photo" />
        </ArmsItem>
        <ArmsItem>
          <img src={Photo14} alt="photo" />
        </ArmsItem>
        <ArmsItem>
          <img src={Photo15} alt="photo" />
        </ArmsItem>
        <ArmsItem>
          <img src={Photo16} alt="photo" />
        </ArmsItem>
      </ArmsContent>
    </ArmsContainer>
  );
};

export default Arms;
