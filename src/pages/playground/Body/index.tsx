import React from "react";
import {
  BodyContainer,
  BodyTitle,
  BodyDetail,
  BodyContent,
  BodyItem,
} from "./index.styled";
import capitalize1 from "../../../assets/parts/body/04fb74.gif";
import capitalize2 from "../../../assets/parts/body/05d4a0.gif";
import capitalize3 from "../../../assets/parts/body/09dc9c.gif";
import capitalize4 from "../../../assets/parts/body/10c8c0.gif";
import capitalize5 from "../../../assets/parts/body/13c9c0.gif";
import capitalize6 from "../../../assets/parts/body/14f488.gif";
import capitalize7 from "../../../assets/parts/body/15d49a.gif";
import capitalize8 from "../../../assets/parts/body/068f53.gif";
import capitalize9 from "../../../assets/parts/body/089f7d.gif";
import capitalize10 from "../../../assets/parts/body/0117eb.gif";
import capitalize11 from "../../../assets/parts/body/1109a6.gif";
import capitalize12 from "../../../assets/parts/body/1223de.gif";
import capitalize13 from "../../../assets/parts/body/006625.gif";
import capitalize14 from "../../../assets/parts/body/021797.gif";
import capitalize15 from "../../../assets/parts/body/030535.gif";
import capitalize16 from "../../../assets/parts/body/072917.gif";
type BodyProps = {
  SetBody: Function;
};
const Body = ({ SetBody }: BodyProps) => {
  const setItem = (e: any) => {
    SetBody(e.target.src);
    for (let i = 1; i <= 16; i++) {
      document.getElementById("body" + i)?.classList.remove("border");
    }
    document.getElementById("body" + e.target.id)?.classList.add("border");
  };
  return (
    <BodyContainer>
      <BodyTitle>
        Body <span>M14 Mercury</span>
      </BodyTitle>
      <BodyDetail>Power: 80</BodyDetail>
      <BodyContent>
        <BodyItem id="body1">
          <img
            id="1"
            src={capitalize1}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </BodyItem>
        <BodyItem id="body2">
          <img
            id="2"
            src={capitalize2}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </BodyItem>
        <BodyItem id="body3">
          <img
            id="3"
            src={capitalize3}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </BodyItem>
        <BodyItem id="body4">
          <img
            id="4"
            src={capitalize4}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </BodyItem>
        <BodyItem id="body5">
          <img
            id="5"
            src={capitalize5}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </BodyItem>
        <BodyItem id="body6">
          <img
            id="6"
            src={capitalize6}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </BodyItem>
        <BodyItem id="body7">
          <img
            id="7"
            src={capitalize7}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </BodyItem>
        <BodyItem id="body8">
          <img
            id="8"
            src={capitalize8}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </BodyItem>
        <BodyItem id="body9">
          <img
            id="9"
            src={capitalize9}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </BodyItem>
        <BodyItem id="body10">
          <img
            id="10"
            src={capitalize10}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </BodyItem>
        <BodyItem id="body11">
          <img
            id="11"
            src={capitalize11}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </BodyItem>
        <BodyItem id="body12">
          <img
            id="12"
            src={capitalize12}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </BodyItem>
        <BodyItem id="body13">
          <img
            id="13"
            src={capitalize13}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </BodyItem>
        <BodyItem id="body14">
          <img
            id="14"
            src={capitalize14}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </BodyItem>
        <BodyItem id="body15">
          <img
            id="15"
            src={capitalize15}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </BodyItem>
        <BodyItem id="body16">
          <img
            id="16"
            src={capitalize16}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </BodyItem>
      </BodyContent>
    </BodyContainer>
  );
};

export default Body;
