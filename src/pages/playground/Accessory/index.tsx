import React from "react";
import {
  AccessoryContainer,
  AccessoryTitle,
  AccessoryDetail,
  AccessoryContent,
  AccessoryItem,
} from "./index.styled";
import capitalize1 from "../../../assets/parts/accessory/02cf30.gif";
import capitalize2 from "../../../assets/parts/accessory/03f9b6.gif";
import capitalize3 from "../../../assets/parts/accessory/05f15b.gif";
import capitalize4 from "../../../assets/parts/accessory/00065d.gif";
import capitalize5 from "../../../assets/parts/accessory/01472e.gif";
import capitalize6 from "../../../assets/parts/accessory/06900b.gif";
import capitalize7 from "../../../assets/parts/accessory/048136.gif";

type AccessoryProps = {
  SetAccessory: Function;
};
const Accessory = ({ SetAccessory }: AccessoryProps) => {
  const setItem = (e: any) => {
    SetAccessory(e.target.src);
    for (let i = 1; i <= 7; i++) {
      document.getElementById("accessory" + i)?.classList.remove("border");
    }
    document.getElementById("accessory" + e.target.id)?.classList.add("border");
  };
  return (
    <AccessoryContainer>
      <AccessoryTitle>
        Accessory <span>M09 Bakken</span>
      </AccessoryTitle>
      <AccessoryDetail>Power: 400</AccessoryDetail>
      <AccessoryContent>
        <AccessoryItem id="accessory1">
          <img
            id="1"
            src={capitalize1}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </AccessoryItem>
        <AccessoryItem id="accessory2">
          <img
            id="2"
            src={capitalize2}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </AccessoryItem>
        <AccessoryItem id="accessory3">
          <img
            id="3"
            src={capitalize3}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </AccessoryItem>
        <AccessoryItem id="accessory4">
          <img
            id="4"
            src={capitalize4}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </AccessoryItem>
        <AccessoryItem id="accessory5">
          <img
            id="5"
            src={capitalize5}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </AccessoryItem>
        <AccessoryItem id="accessory6">
          <img
            id="6"
            src={capitalize6}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </AccessoryItem>
        <AccessoryItem id="accessory7">
          <img
            id="7"
            src={capitalize7}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </AccessoryItem>
      </AccessoryContent>
    </AccessoryContainer>
  );
};

export default Accessory;
