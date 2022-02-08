import React from "react";
import {
  AccessoryContainer,
  AccessoryTitle,
  AccessoryDetail,
  AccessoryContent,
  AccessoryItem,
} from "./index.styled";
import Photo1 from "../../../assets/parts/accessory/02cf30.gif";
import Photo2 from "../../../assets/parts/accessory/03f9b6.gif";
import Photo3 from "../../../assets/parts/accessory/05f15b.gif";
import Photo4 from "../../../assets/parts/accessory/00065d.gif";
import Photo5 from "../../../assets/parts/accessory/01472e.gif";
import Photo6 from "../../../assets/parts/accessory/06900b.gif";
import Photo7 from "../../../assets/parts/accessory/048136.gif";

const Accessory = () => {
  return (
    <AccessoryContainer>
      <AccessoryTitle>
        Accessory <span>M09 Bakken</span>
      </AccessoryTitle>
      <AccessoryDetail>Power: 400</AccessoryDetail>
      <AccessoryContent>
        <AccessoryItem>
          <img src={Photo1} alt="photo" />
        </AccessoryItem>
        <AccessoryItem>
          <img src={Photo2} alt="photo" />
        </AccessoryItem>
        <AccessoryItem>
          <img src={Photo3} alt="photo" />
        </AccessoryItem>
        <AccessoryItem>
          <img src={Photo4} alt="photo" />
        </AccessoryItem>
        <AccessoryItem>
          <img src={Photo5} alt="photo" />
        </AccessoryItem>
        <AccessoryItem>
          <img src={Photo6} alt="photo" />
        </AccessoryItem>
        <AccessoryItem>
          <img src={Photo7} alt="photo" />
        </AccessoryItem>
      </AccessoryContent>
    </AccessoryContainer>
  );
};

export default Accessory;
