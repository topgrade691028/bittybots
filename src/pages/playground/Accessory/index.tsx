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

const Accessory = () => {
  return (
    <AccessoryContainer>
      <AccessoryTitle>
        Accessory <span>M09 Bakken</span>
      </AccessoryTitle>
      <AccessoryDetail>Power: 400</AccessoryDetail>
      <AccessoryContent>
        <AccessoryItem>
          <img src={capitalize1} alt="capitalize" />
        </AccessoryItem>
        <AccessoryItem>
          <img src={capitalize2} alt="capitalize" />
        </AccessoryItem>
        <AccessoryItem>
          <img src={capitalize3} alt="capitalize" />
        </AccessoryItem>
        <AccessoryItem>
          <img src={capitalize4} alt="capitalize" />
        </AccessoryItem>
        <AccessoryItem>
          <img src={capitalize5} alt="capitalize" />
        </AccessoryItem>
        <AccessoryItem>
          <img src={capitalize6} alt="capitalize" />
        </AccessoryItem>
        <AccessoryItem>
          <img src={capitalize7} alt="capitalize" />
        </AccessoryItem>
      </AccessoryContent>
    </AccessoryContainer>
  );
};

export default Accessory;
