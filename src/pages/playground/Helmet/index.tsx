import React from "react";
import {
  HelmetContainer,
  HelmetTitle,
  HelmetDetail,
  HelmetContent,
  HelmetItem,
} from "./index.styled";
import capitalize1 from "../../../assets/parts/helmet/07e2db.gif";
import capitalize2 from "../../../assets/parts/helmet/09a4d7.gif";
import capitalize3 from "../../../assets/parts/helmet/13b730.gif";
import capitalize4 from "../../../assets/parts/helmet/034d7f.gif";
import capitalize5 from "../../../assets/parts/helmet/040ff8.gif";
import capitalize6 from "../../../assets/parts/helmet/0064f8.gif";
import capitalize7 from "../../../assets/parts/helmet/069cbe.gif";
import capitalize8 from "../../../assets/parts/helmet/100dec.gif";
import capitalize9 from "../../../assets/parts/helmet/146a94.gif";
import capitalize10 from "../../../assets/parts/helmet/157f0e.gif";
import capitalize11 from "../../../assets/parts/helmet/05586a.gif";
import capitalize12 from "../../../assets/parts/helmet/08535c.gif";
import capitalize13 from "../../../assets/parts/helmet/11594f.gif";
import capitalize14 from "../../../assets/parts/helmet/021476.gif";
import capitalize15 from "../../../assets/parts/helmet/129227.gif";
type HelmetProps = {
  SetHelmet: Function;
};
const Helmet = ({ SetHelmet }: HelmetProps) => {
  const setItem = (e: any) => {
    SetHelmet(e.target.src);
    for (let i = 1; i <= 15; i++) {
      document.getElementById("helmet" + i)?.classList.remove("border");
    }
    document.getElementById("helmet" + e.target.id)?.classList.add("border");
  };
  return (
    <HelmetContainer>
      <HelmetTitle>
        Helmet <span>M02 Shadow King</span>
      </HelmetTitle>
      <HelmetDetail>Power: 40</HelmetDetail>
      <HelmetContent>
        <HelmetItem id="helmet1">
          <img
            id="1"
            src={capitalize1}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </HelmetItem>
        <HelmetItem id="helmet2">
          <img
            id="2"
            src={capitalize2}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </HelmetItem>
        <HelmetItem id="helmet3">
          <img
            id="3"
            src={capitalize3}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </HelmetItem>
        <HelmetItem id="helmet4">
          <img
            id="4"
            src={capitalize4}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </HelmetItem>
        <HelmetItem id="helmet5">
          <img
            id="5"
            src={capitalize5}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </HelmetItem>
        <HelmetItem id="helmet6">
          <img
            id="6"
            src={capitalize6}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </HelmetItem>
        <HelmetItem id="helmet7">
          <img
            id="7"
            src={capitalize7}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </HelmetItem>
        <HelmetItem id="helmet8">
          <img
            id="8"
            src={capitalize8}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </HelmetItem>
        <HelmetItem id="helmet9">
          <img
            id="9"
            src={capitalize9}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </HelmetItem>
        <HelmetItem id="helmet10">
          <img
            id="10"
            src={capitalize10}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </HelmetItem>
        <HelmetItem id="helmet11">
          <img
            id="11"
            src={capitalize11}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </HelmetItem>
        <HelmetItem id="helmet12">
          <img
            id="12"
            src={capitalize12}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </HelmetItem>
        <HelmetItem id="helmet13">
          <img
            id="13"
            src={capitalize13}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </HelmetItem>
        <HelmetItem id="helmet14">
          <img
            id="14"
            src={capitalize14}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </HelmetItem>
        <HelmetItem id="helmet15">
          <img
            id="15"
            src={capitalize15}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </HelmetItem>
      </HelmetContent>
    </HelmetContainer>
  );
};

export default Helmet;
