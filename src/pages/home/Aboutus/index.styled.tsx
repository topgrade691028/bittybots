import styled from "styled-components";
export const AboutUsContainer = styled.div`
  padding: 7.5rem 1.5rem;
  background-color: #9b79d5;
  @media screen and (max-width: 991px) {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
`;
export const AboutUsContent = styled.div`
  margin-left: 16.6666666667%;
  margin-right: 16.6666666667%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1399px) {
    margin-left: 5%;
    margin-right: 5%;
  }
  @media screen and (max-width: 991px) {
    display: flex;
    flex-direction: column;
    margin: auto 20px;
  }
`;
export const AboutUsText = styled.div`
  h1 {
    font-family: Chivo;
    font-weight: 900;
    font-size: 48px;
    padding-top: 1rem;
    padding-bottom: 1rem;
    line-height: 1.2;
    margin-bottom: 0.5rem;
    color: #34FEFE;
    max-width:440px;
    @media screen and (max-width: 991px) {
      margin-block-start: 0em;
    margin-block-end: 0em;
    }
  }
  p {
    font-family: Space Mono;
    font-size: 18px;
    font-weight: 400;
    margin-top: 0;
    margin-bottom: 1rem;
    color: #fff;
    line-height:30px;
    a{
      color:#34FEFE;
    }
}
  }
`;
export const AboutUsImage = styled.div`
  padding-bottom: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-family: Space Mono;
    font-size: 16px;
    font-weight: 400;
    margin-top: 0;
    color: #04396c;
    margin-bottom: 1rem;
  }
  a {
    color: rgb(52, 254, 254);
    font-weight: 700;
    text-decoration: none;
  }
`;
