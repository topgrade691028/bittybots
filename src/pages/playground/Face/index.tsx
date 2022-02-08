import React from "react";
import {
  FaceContainer,
  FaceTitle,
  FaceDetail,
  FaceContent,
  FaceItem,
} from "./index.styled";
import Photo1 from "../../../assets/parts/face/003e3c.gif";
import Photo2 from "../../../assets/parts/face/14c35f.gif";
import Photo3 from "../../../assets/parts/face/112df0.gif";
import Photo4 from "../../../assets/parts/face/123e6a.gif";
import Photo5 from "../../../assets/parts/face/0155aa.gif";
import Photo6 from "../../../assets/parts/face/0462d4.gif";
import Photo7 from "../../../assets/parts/face/0532ac.gif";
import Photo8 from "../../../assets/parts/face/0652bf.gif";
import Photo9 from "../../../assets/parts/face/1373f6.gif";
import Photo10 from "../../../assets/parts/face/03771f.gif";
import Photo11 from "../../../assets/parts/face/09719f.gif";
import Photo12 from "../../../assets/parts/face/029440.gif";
import Photo13 from "../../../assets/parts/face/075919.gif";
import Photo14 from "../../../assets/parts/face/084880.gif";
import Photo15 from "../../../assets/parts/face/103305.gif";
import Photo16 from "../../../assets/parts/face/155757.gif";

const Face = () => {
  return (
    <FaceContainer>
      <FaceTitle>
        Face <span>M04 Ultra 7.1</span>
      </FaceTitle>
      <FaceDetail>Power: 40</FaceDetail>
      <FaceContent>
        <FaceItem>
          <img src={Photo1} alt="photo" />
        </FaceItem>
        <FaceItem>
          <img src={Photo2} alt="photo" />
        </FaceItem>
        <FaceItem>
          <img src={Photo3} alt="photo" />
        </FaceItem>
        <FaceItem>
          <img src={Photo4} alt="photo" />
        </FaceItem>
        <FaceItem>
          <img src={Photo5} alt="photo" />
        </FaceItem>
        <FaceItem>
          <img src={Photo6} alt="photo" />
        </FaceItem>
        <FaceItem>
          <img src={Photo7} alt="photo" />
        </FaceItem>
        <FaceItem>
          <img src={Photo8} alt="photo" />
        </FaceItem>
        <FaceItem>
          <img src={Photo9} alt="photo" />
        </FaceItem>
        <FaceItem>
          <img src={Photo10} alt="photo" />
        </FaceItem>
        <FaceItem>
          <img src={Photo11} alt="photo" />
        </FaceItem>
        <FaceItem>
          <img src={Photo12} alt="photo" />
        </FaceItem>
        <FaceItem>
          <img src={Photo13} alt="photo" />
        </FaceItem>
        <FaceItem>
          <img src={Photo14} alt="photo" />
        </FaceItem>
        <FaceItem>
          <img src={Photo15} alt="photo" />
        </FaceItem>
        <FaceItem>
          <img src={Photo16} alt="photo" />
        </FaceItem>
      </FaceContent>
    </FaceContainer>
  );
};

export default Face;
