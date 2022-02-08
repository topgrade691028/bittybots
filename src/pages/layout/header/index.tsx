import React, { useState } from "react";
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
const Header = () => {
  const [showFlag, setShowFlag] = useState(false);
  const Connect = () => {
    alert("welcome to visit Home");
  };
  return (
    <HeaderContainer>
      <img src={Logo} className="logo" width="56px" height="56px" alt="Logo" />
      <HeaderContent>
        <Navbar>
          <span>
            <Link to="/">Home</Link>
          </span>
          <span>
            <Link to="/playground">Playground</Link>
          </span>
          <span>
            <Link to="/collection">My Bots</Link>
          </span>
          <span>
            <Link to="/faq">FAQ</Link>
          </span>
        </Navbar>
        <ConnectMenu>
          <Link to="/">
            <img src={Twitter} width="20px" height="27px" alt="Twitter" />
          </Link>
          <Link to="/">
            <img src={Discord} width="20px" height="27px" alt="Discord" />
          </Link>
          <Link to="/">
            <img src={Medium} width="20px" height="27px" alt="Medium" />
          </Link>
          <Link to="/">
            <img src={Opensea} width="20px" height="27px" alt="Opensea" />
          </Link>
          <Button onClick={() => Connect()}>Switch To Polygon Chain</Button>
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
            <Link to="/">Home</Link>
            <Link to="/">Playground</Link>
            <Link to="/">My Bots</Link>
            <Link to="/">Leaderboard</Link>
            <Link to="/">FAQ</Link>
            <Link to="/">Opensea</Link>
            <Link to="/">Twitter</Link>
            <Link to="/">Discord</Link>
            <Button onClick={() => Connect()}>Switch To Polygon Chain</Button>
          </MobileHeaderContent>
        </>
      )}
    </HeaderContainer>
  );
};

export default Header;
