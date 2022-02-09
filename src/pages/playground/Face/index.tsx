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
type FaceProps = {
  SetFace: Function;
};
const Face = ({ SetFace }: FaceProps) => {
  const setItem = (e: any) => {
    SetFace(e.target.src);
    for (let i = 1; i <= 16; i++) {
      document.getElementById("face" + i)?.classList.remove("border");
    }
    document.getElementById("face" + e.target.id)?.classList.add("border");
  };
  return (
    <FaceContainer>
      <FaceTitle>
        Face <span>M04 Ultra 7.1</span>
      </FaceTitle>
      <FaceDetail>Power: 40</FaceDetail>
      <FaceContent>
        <FaceItem id="face1">
          <img
            id="1"
            src={capitalize1}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </FaceItem>
        <FaceItem id="face2">
          <img
            id="3"
            src={capitalize2}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </FaceItem>
        <FaceItem id="face3">
          <img
            id="3"
            src={capitalize3}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </FaceItem>
        <FaceItem id="face4">
          <img
            id="4"
            src={capitalize4}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </FaceItem>
        <FaceItem id="face5">
          <img
            id="5"
            src={capitalize5}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </FaceItem>
        <FaceItem id="face6">
          <img
            id="6"
            src={capitalize6}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </FaceItem>
        <FaceItem id="face7">
          <img
            id="7"
            src={capitalize7}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </FaceItem>
        <FaceItem id="face8">
          <img
            id="8"
            src={capitalize8}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </FaceItem>
        <FaceItem id="face9">
          <img
            id="9"
            src={capitalize9}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </FaceItem>
        <FaceItem id="face10">
          <img
            id="10"
            src={capitalize10}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </FaceItem>
        <FaceItem id="face11">
          <img
            id="11"
            src={capitalize11}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </FaceItem>
        <FaceItem id="face12">
          <img
            id="12"
            src={capitalize12}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </FaceItem>
        <FaceItem id="face13">
          <img
            id="13"
            src={capitalize13}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </FaceItem>
        <FaceItem id="face14">
          <img
            id="14"
            src={capitalize14}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </FaceItem>
        <FaceItem id="face15">
          <img
            id="15"
            src={capitalize15}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </FaceItem>
        <FaceItem id="face16">
          <img
            id="16"
            src={capitalize16}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </FaceItem>
      </FaceContent>
    </FaceContainer>
  );
};

export default Face;
