import styled from "styled-components";
export const HeaderContainer = styled.div`
  display: flex;
  min-height: 48px;
  width: 100%;
  align-items: center;
  transition: all 0.85s ease-in-out;
  position: sticky;
  top: 0;
  z-index: 9999;
  .logo {
    z-index: 999999;
    margin-top: -10px;
  }
  .menu_icon {
    font-size: 40px;
    display: none;
  }
  @media screen and (max-width: 855px) {
    justify-content: space-between;
    padding: 0 20px;
    box-sizing: border-box;
    .menu_icon {
      display: inline-block;

      z-index: 10;
    }
  }
`;
export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media screen and (max-width: 855px) {
    display: none;
  }
`;
export const MobileHeaderContent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding-top: 50px;
  box-sizing: border-box;
  background-color: white;
  a {
    font-family: Chivo, sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 18px;
    text-decoration: none;
    min-height: ;
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
    color: #04396c;
    text-decoration: none;
  }
`;

export const Navbar = styled.div`
  display: flex;
  align-items: center;
  font-family: Chivo, sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  padding: 0;
  a {
    color: #04396c;
    text-decoration: none;
    margin-left: 20px;
  }
  a:active,
  :focus {
    color: #e91e63;
  }
`;
export const ConnectMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    margin-right: 20px;
  }
`;
export const Button = styled.span`
  color: white;
  font-size: 16px;
  background: #e91e63;
  font-family: Chivo;
  font-weight: 900;
  cursor: pointer;
  padding: 6px 16px;
  min-width: 64px;
  box-sizing: border-box;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  line-height: 1.75;
  border-radius: 4px;
  text-transform: capitalize;
`;
