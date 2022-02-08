import React from "react";
import { SliderContainer, SliderContent } from "./index.styled";
import character1 from "../../assets/example_1.gif";
import character2 from "../../assets/example_2.gif";
import character3 from "../../assets/example_3.gif";
import character4 from "../../assets/example_4.gif";
import character5 from "../../assets/example_5.gif";
import character6 from "../../assets/example_6.gif";
import character7 from "../../assets/example_7.gif";
import character8 from "../../assets/example_8.gif";
import character9 from "../../assets/example_9.gif";
import character10 from "../../assets/example_10.gif";
const Slider = () => {
  return (
    <SliderContainer>
      <SliderContent>
        <li>
          <img src={character1} width="144px" height="auto" alt="logo" />
        </li>
        <li>
          <img src={character2} width="144px" height="auto" alt="logo" />
        </li>
        <li>
          <img src={character3} width="144px" height="auto" alt="logo" />
        </li>
        <li>
          <img src={character4} width="144px" height="auto" alt="logo" />
        </li>
        <li>
          <img src={character5} width="144px" height="auto" alt="logo" />
        </li>
        <li>
          <img src={character6} width="144px" height="auto" alt="logo" />
        </li>
        <li>
          <img src={character7} width="144px" height="auto" alt="logo" />
        </li>
        <li>
          <img src={character8} width="144px" height="auto" alt="logo" />
        </li>
        <li>
          <img src={character9} width="144px" height="auto" alt="logo" />
        </li>
        <li>
          <img src={character10} width="144px" height="auto" alt="logo" />
        </li>
        <li>
          <img src={character1} width="144px" height="auto" alt="logo" />
        </li>
        <li>
          <img src={character2} width="144px" height="auto" alt="logo" />
        </li>
        <li>
          <img src={character3} width="144px" height="auto" alt="logo" />
        </li>
        <li>
          <img src={character4} width="144px" height="auto" alt="logo" />
        </li>
        <li>
          <img src={character5} width="144px" height="auto" alt="logo" />
        </li>
        <li>
          <img src={character6} width="144px" height="auto" alt="logo" />
        </li>
        <li>
          <img src={character7} width="144px" height="auto" alt="logo" />
        </li>
        <li>
          <img src={character8} width="144px" height="auto" alt="logo" />
        </li>
        <li>
          <img src={character9} width="144px" height="auto" alt="logo" />
        </li>
        <li>
          <img src={character10} width="144px" height="auto" alt="logo" />
        </li>
      </SliderContent>
    </SliderContainer>
  );
};

export default Slider;
