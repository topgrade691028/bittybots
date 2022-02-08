import React from "react";
import {
  EngineContainer,
  EngineTitle,
  EngineDetail,
  EngineContent,
  EngineItem,
} from "./index.styled";
import Photo1 from "../../../assets/parts/engine/00fdea.gif";
import Photo2 from "../../../assets/parts/engine/02ce86.gif";
import Photo3 from "../../../assets/parts/engine/03cf7d.gif";
import Photo4 from "../../../assets/parts/engine/056fcf.gif";
import Photo5 from "../../../assets/parts/engine/01458b.gif";
import Photo6 from "../../../assets/parts/engine/07246d.gif";
import Photo7 from "../../../assets/parts/engine/09307b.gif";
import Photo8 from "../../../assets/parts/engine/046480.gif";
import Photo9 from "../../../assets/parts/engine/063124.gif";
import Photo10 from "../../../assets/parts/engine/089980.gif";

const Engine = () => {
  return (
    <EngineContainer>
      <EngineTitle>
        Engine <span>Death</span>
      </EngineTitle>
      <EngineDetail>Power: 190</EngineDetail>
      <EngineContent>
        <EngineItem>
          <img src={Photo1} alt="photo" />
        </EngineItem>
        <EngineItem>
          <img src={Photo2} alt="photo" />
        </EngineItem>
        <EngineItem>
          <img src={Photo3} alt="photo" />
        </EngineItem>
        <EngineItem>
          <img src={Photo4} alt="photo" />
        </EngineItem>
        <EngineItem>
          <img src={Photo5} alt="photo" />
        </EngineItem>
        <EngineItem>
          <img src={Photo6} alt="photo" />
        </EngineItem>
        <EngineItem>
          <img src={Photo7} alt="photo" />
        </EngineItem>
        <EngineItem>
          <img src={Photo8} alt="photo" />
        </EngineItem>
        <EngineItem>
          <img src={Photo9} alt="photo" />
        </EngineItem>
        <EngineItem>
          <img src={Photo10} alt="photo" />
        </EngineItem>
      </EngineContent>
    </EngineContainer>
  );
};

export default Engine;
