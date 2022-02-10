import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  HeaderContainer,
  Navbar,
  ConnectMenu,
  Button,
  HeaderContent,
  MobileHeaderContent,
} from "./index.styled";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "../../../assets/logo.png";
import Twitter from "../../../assets/Twitter.svg";
import Discord from "../../../assets/Discord.svg";
import Medium from "../../../assets/Medium.svg";
import Opensea from "../../../assets/Opensea.svg";
declare global {
  interface Window {
    ethereum: any;
  }
}

const Header = () => {
  const [showFlag, setShowFlag] = useState(false);
  const [address, setAddress] = useState("");
  const [y, setY] = useState(window.scrollY);

  useEffect(() => {
    const handleNavigation = (e: any) => {
      const window = e.currentTarget;
      if (y > 10) {
        document.getElementById("container")?.classList.add("scrollContainer");
      } else if (y <= 10) {
        document
          .getElementById("container")
          ?.classList.remove("scrollContainer");
      }
      setY(window.scrollY);
    };
    window.addEventListener("scroll", (e) => handleNavigation(e));

    return () => {
      // return a cleanup function to unregister our function since its gonna run multiple times
      window.removeEventListener("scroll", (e) => handleNavigation(e));
    };
  }, [y]);
  useEffect(() => {
    document
      .getElementById("navbarItem" + 1)
      ?.classList.add("activeNavbarItem");
  }, []);
  const Connect = () => {
    const { ethereum } = window;
    ethereum
      .enable()
      .then((s: any) => {
        setAddress(ethereum.selectedAddress);
        let temp =
          ethereum.selectedAddress.slice(0, 5) +
          "..." +
          ethereum.selectedAddress.slice(-3, -1);
        setAddress(temp);
      })
      .catch((err: any) => console.log(err));
  };
  const ItemClick = (e: number) => {
    for (let i = 1; i <= 4; i++) {
      document
        .getElementById("navbarItem" + i)
        ?.classList.remove("activeNavbarItem");
    }
    document
      .getElementById("navbarItem" + e)
      ?.classList.add("activeNavbarItem");
  };
  return (
    <HeaderContainer id="container">
      <img src={Logo} className="logo" width="56px" height="56px" alt="Logo" />
      <HeaderContent>
        <Navbar>
          <Link to="/">
            <div id="navbarItem1" onClick={() => ItemClick(1)}>
              Home
            </div>
          </Link>

          <Link to="/playground">
            <div id="navbarItem2" onClick={() => ItemClick(2)}>
              Playground
            </div>
          </Link>
          <Link to="/collection">
            <div id="navbarItem3" onClick={() => ItemClick(3)}>
              My Bots
            </div>
          </Link>
          <Link to="/faq">
            <div id="navbarItem4" onClick={() => ItemClick(4)}>
              FAQ
            </div>
          </Link>
        </Navbar>
        <ConnectMenu>
          <Link to="https://twitter.com/bittybotsnft">
            <img src={Twitter} width="20px" height="27px" alt="Twitter" />
          </Link>
          <Link to="https://discord.gg/epgNmkG3ZT">
            <img src={Discord} width="20px" height="27px" alt="Discord" />
          </Link>
          <Link to="https://medium.com/chubbiesnft/bittybots-whitepaper-c2d3550ab89d">
            <img src={Medium} width="20px" height="27px" alt="Medium" />
          </Link>
          <Link to="http://opensea.io/collection/bittybots">
            <img src={Opensea} width="20px" height="27px" alt="Opensea" />
          </Link>
          <Button onClick={() => Connect()}>
            {address !== "" ? address : "Switch To Polygon Chain"}
          </Button>
        </ConnectMenu>
      </HeaderContent>
      {!showFlag && (
        <AiOutlineMenu
          onClick={() => setShowFlag(!showFlag)}
          className="menu_icon"
        />
      )}
      {showFlag && (
        <AiOutlineClose
          onClick={() => setShowFlag(!showFlag)}
          className="menu_icon"
        />
      )}
      {showFlag && (
        <>
          <MobileHeaderContent>
            <Link to="/">
              <div id="navbarItem1" onClick={() => ItemClick(1)}>
                Home
              </div>
            </Link>
            <Link to="/playground">
              <div id="navbarItem2" onClick={() => ItemClick(2)}>
                Playground
              </div>
            </Link>
            <Link to="/collection">
              <div id="navbarItem3" onClick={() => ItemClick(3)}>
                My Bots
              </div>
            </Link>
            <Link to="/faq">
              <div id="navbarItem4" onClick={() => ItemClick(4)}>
                FAQ
              </div>
            </Link>
            <Link to="/">Opensea</Link>
            <Link to="/">Twitter</Link>
            <Link to="/">Discord</Link>
            <Button onClick={() => Connect()}>
              {address !== "" ? address : "Switch To Polygon Chain"}
            </Button>
          </MobileHeaderContent>
        </>
      )}
    </HeaderContainer>
  );
};

export default Header;
