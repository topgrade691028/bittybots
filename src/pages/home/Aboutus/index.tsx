import React from "react";
import {
  AboutUsContainer,
  AboutUsContent,
  AboutUsText,
  AboutUsImage,
  Item,
} from "./index.styled";
import Dev1 from "../../../assets/kixboy_no_shadowad5c.gif";
import Dev2 from "../../../assets/solazy_no_shadow136a.gif";
const AboutUs = () => {
  return (
    <AboutUsContainer>
      <AboutUsContent>
        <AboutUsText>
          <h1>About Us</h1>
          <p>
            BittyBots is created by
            <a
              href="https://twitter.com/_kixboy"
              target="_blank"
              rel="noreferrer"
            >
              @_kixboy
            </a>
            and
            <a
              href="https://twitter.com/_solazy"
              target="_blank"
              rel="noreferrer"
            >
              @_solazy
            </a>
            (
            <a
              href="https://twitter.com/ChubbiesNFT"
              target="_blank"
              rel="noreferrer"
            >
              @ChubbiesNFT
            </a>
            ). We’re a two-person team that code and create experimental art. We
            ❤️ crypto, NFTs, and Bomberman. Through the years we’ve become good
            friends that have bonded over a love of traveling ✈️, boardgames 🎲
            and foods 🍜.
          </p>
          <p>
            New to the NFT world, and inspired by @ChubbiesNFT, @_kixboy had the
            idea of creating something from his childhood drawings—thus,
            BittyBots were born. The idea was formed back in April 2021, but at
            that time @_solazy had prior commitments to Chubbies. By giving back
            to Chubbies owners 1 to 1, our priorities aligned and we have set
            forth to create a one-of-a-kind collection that no one has done
            before.
          </p>
        </AboutUsText>
        <AboutUsImage>
          <Item>
            <img src={Dev1} width="208px" alt="photo" />

            <p>
              <a href="/">kixboy</a>
              <span> (art)</span>
            </p>
          </Item>
          <Item>
            <img src={Dev2} width="208px" alt="photo" />
            <p>
              <a href="/">solazy</a>
              <span> (dev)</span>
            </p>
          </Item>
        </AboutUsImage>
      </AboutUsContent>
    </AboutUsContainer>
  );
};

export default AboutUs;
