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

type ArmsProps = {
  SetArm: Function;
};

const Arms = ({ SetArm }: ArmsProps) => {
  const setItem = (e: any) => {
    SetArm(e.target.src);
    for (let i = 1; i <= 16; i++) {
      document.getElementById("cap" + i)?.classList.remove("border");
    }
    document.getElementById("cap" + e.target.id)?.classList.add("border");
  };
  return (
    <ArmsContainer>
      <ArmsTitle>
        Arms <span>M09 Bakken</span>
      </ArmsTitle>
      <ArmsDetail>Power: 40</ArmsDetail>
      <ArmsContent>
        <ArmsItem id="cap1">
          <img
            id="1"
            src={capitalize1}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </ArmsItem>
        <ArmsItem id="cap2">
          <img
            id="2"
            src={capitalize2}
            alt="capitalize"
            onClick={(e) => setItem(e)}
          />
        </ArmsItem>
        <ArmsItem id="cap3">
          <img
            id="3"
            src={capitalize3}
            alt="capitalize"
            onClick={(e) => setItem(e)}
          />
        </ArmsItem>
        <ArmsItem id="cap4">
          <img
            id="4"
            src={capitalize4}
            alt="capitalize"
            onClick={(e) => setItem(e)}
          />
        </ArmsItem>
        <ArmsItem id="cap5">
          <img
            id="5"
            src={capitalize5}
            alt="capitalize"
            onClick={(e) => setItem(e)}
          />
        </ArmsItem>
        <ArmsItem id="cap6">
          <img
            id="6"
            src={capitalize6}
            alt="capitalize"
            onClick={(e) => setItem(e)}
          />
        </ArmsItem>
        <ArmsItem id="cap7">
          <img
            id="7"
            src={capitalize7}
            alt="capitalize"
            onClick={(e) => setItem(e)}
          />
        </ArmsItem>
        <ArmsItem id="cap8">
          <img
            id="8"
            src={capitalize8}
            alt="capitalize"
            onClick={(e) => setItem(e)}
          />
        </ArmsItem>
        <ArmsItem id="cap9">
          <img
            id="9"
            src={capitalize9}
            alt="capitalize"
            onClick={(e) => setItem(e)}
          />
        </ArmsItem>
        <ArmsItem id="cap10">
          <img
            id="10"
            src={capitalize10}
            alt="capitalizealize"
            onClick={(e) => setItem(e)}
          />
        </ArmsItem>
        <ArmsItem id="cap11">
          <img
            id="11"
            src={capitalizealize11}
            alt="capitalize"
            onClick={(e) => setItem(e)}
          />
        </ArmsItem>
        <ArmsItem id="cap12">
          <img
            id="12"
            src={capitalize12}
            alt="capitalize"
            onClick={(e) => setItem(e)}
          />
        </ArmsItem>
        <ArmsItem id="cap13">
          <img
            id="13"
            src={capitalize13}
            alt="capitalize"
            onClick={(e) => setItem(e)}
          />
        </ArmsItem>
        <ArmsItem id="cap14">
          <img
            id="14"
            src={capitalize14}
            alt="capitalize"
            onClick={(e) => setItem(e)}
          />
        </ArmsItem>
        <ArmsItem id="cap15">
          <img
            id="15"
            src={capitalize15}
            alt="capitalize"
            onClick={(e) => setItem(e)}
          />
        </ArmsItem>
        <ArmsItem id="cap16">
          <img
            id="16"
            src={capitalize16}
            alt="capitalize"
            onClick={(e) => setItem(e)}
          />
        </ArmsItem>
      </ArmsContent>
    </ArmsContainer>
  );
};

export default Arms;
