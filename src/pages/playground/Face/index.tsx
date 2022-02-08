import React from "react";
import {
  FaceContainer,
  FaceTitle,
  FaceDetail,
  FaceContent,
  FaceItem,
} from "./index.styled";
import capitalize1 from "../../../assets/parts/face/003e3c.gif";
import capitalize2 from "../../../assets/parts/face/14c35f.gif";
import capitalize3 from "../../../assets/parts/face/112df0.gif";
import capitalize4 from "../../../assets/parts/face/123e6a.gif";
import capitalize5 from "../../../assets/parts/face/0155aa.gif";
import capitalize6 from "../../../assets/parts/face/0462d4.gif";
import capitalize7 from "../../../assets/parts/face/0532ac.gif";
import capitalize8 from "../../../assets/parts/face/0652bf.gif";
import capitalize9 from "../../../assets/parts/face/1373f6.gif";
import capitalize10 from "../../../assets/parts/face/03771f.gif";
import capitalize11 from "../../../assets/parts/face/09719f.gif";
import capitalize12 from "../../../assets/parts/face/029440.gif";
import capitalize13 from "../../../assets/parts/face/075919.gif";
import capitalize14 from "../../../assets/parts/face/084880.gif";
import capitalize15 from "../../../assets/parts/face/103305.gif";
import capitalize16 from "../../../assets/parts/face/155757.gif";

const Face = () => {
  return (
    <FaceContainer>
      <FaceTitle>
        Face <span>M04 Ultra 7.1</span>
      </FaceTitle>
      <FaceDetail>Power: 40</FaceDetail>
      <FaceContent>
        <FaceItem>
          <img src={capitalize1} alt="capitalize" />
        </FaceItem>
        <FaceItem>
          <img src={capitalize2} alt="capitalize" />
        </FaceItem>
        <FaceItem>
          <img src={capitalize3} alt="capitalize" />
        </FaceItem>
        <FaceItem>
          <img src={capitalize4} alt="capitalize" />
        </FaceItem>
        <FaceItem>
          <img src={capitalize5} alt="capitalize" />
        </FaceItem>
        <FaceItem>
          <img src={capitalize6} alt="capitalize" />
        </FaceItem>
        <FaceItem>
          <img src={capitalize7} alt="capitalize" />
        </FaceItem>
        <FaceItem>
          <img src={capitalize8} alt="capitalize" />
        </FaceItem>
        <FaceItem>
          <img src={capitalize9} alt="capitalize" />
        </FaceItem>
        <FaceItem>
          <img src={capitalize10} alt="capitalize" />
        </FaceItem>
        <FaceItem>
          <img src={capitalize11} alt="capitalize" />
        </FaceItem>
        <FaceItem>
          <img src={capitalize12} alt="capitalize" />
        </FaceItem>
        <FaceItem>
          <img src={capitalize13} alt="capitalize" />
        </FaceItem>
        <FaceItem>
          <img src={capitalize14} alt="capitalize" />
        </FaceItem>
        <FaceItem>
          <img src={capitalize15} alt="capitalize" />
        </FaceItem>
        <FaceItem>
          <img src={capitalize16} alt="capitalize" />
        </FaceItem>
      </FaceContent>
    </FaceContainer>
  );
};

export default Face;
