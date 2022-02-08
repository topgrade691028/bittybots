import React from "react";
import {
  ArmsContainer,
  ArmsTitle,
  ArmsDetail,
  ArmsContent,
  ArmsItem,
} from "./index.styled";
import capitalize1 from "../../../assets/parts/arms/00c57f.gif";
import capitalize2 from "../../../assets/parts/arms/01e0d6.gif";
import capitalize3 from "../../../assets/parts/arms/04eecb.gif";
import capitalize4 from "../../../assets/parts/arms/08eb0e.gif";
import capitalize5 from "../../../assets/parts/arms/09f9e0.gif";
import capitalize6 from "../../../assets/parts/arms/13b3db.gif";
import capitalize7 from "../../../assets/parts/arms/032c56.gif";
import capitalize8 from "../../../assets/parts/arms/073f0f.gif";
import capitalize9 from "../../../assets/parts/arms/1233da.gif";
import capitalize10 from "../../../assets/parts/arms/1402fd.gif";
import capitalizealize11 from "../../../assets/parts/arms/1564d0.gif";
import capitalize12 from "../../../assets/parts/arms/020906.gif";
import capitalize13 from "../../../assets/parts/arms/051009.gif";
import capitalize14 from "../../../assets/parts/arms/061646.gif";
import capitalize15 from "../../../assets/parts/arms/104773.gif";
import capitalize16 from "../../../assets/parts/arms/117515.gif";

const Arms = () => {
  return (
    <ArmsContainer>
      <ArmsTitle>
        Arms <span>M09 Bakken</span>
      </ArmsTitle>
      <ArmsDetail>Power: 40</ArmsDetail>
      <ArmsContent>
        <ArmsItem>
          <img src={capitalize1} alt="capitalize" />
        </ArmsItem>
        <ArmsItem>
          <img src={capitalize2} alt="capitalize" />
        </ArmsItem>
        <ArmsItem>
          <img src={capitalize3} alt="capitalize" />
        </ArmsItem>
        <ArmsItem>
          <img src={capitalize4} alt="capitalize" />
        </ArmsItem>
        <ArmsItem>
          <img src={capitalize5} alt="capitalize" />
        </ArmsItem>
        <ArmsItem>
          <img src={capitalize6} alt="capitalize" />
        </ArmsItem>
        <ArmsItem>
          <img src={capitalize7} alt="capitalize" />
        </ArmsItem>
        <ArmsItem>
          <img src={capitalize8} alt="capitalize" />
        </ArmsItem>
        <ArmsItem>
          <img src={capitalize9} alt="capitalize" />
        </ArmsItem>
        <ArmsItem>
          <img src={capitalize10} alt="capitalizealize" />
        </ArmsItem>
        <ArmsItem>
          <img src={capitalizealize11} alt="capitalize" />
        </ArmsItem>
        <ArmsItem>
          <img src={capitalize12} alt="capitalize" />
        </ArmsItem>
        <ArmsItem>
          <img src={capitalize13} alt="capitalize" />
        </ArmsItem>
        <ArmsItem>
          <img src={capitalize14} alt="capitalize" />
        </ArmsItem>
        <ArmsItem>
          <img src={capitalize15} alt="capitalize" />
        </ArmsItem>
        <ArmsItem>
          <img src={capitalize16} alt="capitalize" />
        </ArmsItem>
      </ArmsContent>
    </ArmsContainer>
  );
};

export default Arms;
