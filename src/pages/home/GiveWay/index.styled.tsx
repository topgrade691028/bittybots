import styled from "styled-components";
export const GiveWayContainer = styled.div`
  padding: 7.5rem 1.5rem;
  background-color: #b4e7f8;
  @media screen and (max-width: 991px) {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
`;
export const GiveWayContent = styled.div`
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
export const GiveWayTitle = styled.div`
  font-size: 80px;
  font-family: Chivo;
  font-weight: 900;
  line-height: 1.2;
  color: #04396c;
  span {
    color: #e91e63;
  }
`;
export const GiveWayDescription = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-family: Space Mono;
    font-size: 18px;
    font-weight: 400;
    margin-top: 0;
    margin-bottom: 1rem;
    color: #04396c;
    line-height: 30px;
  }
`;
export const GiveWayImageGroup = styled.div`
  padding-bottom: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
export const CollectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #b4e7f8;
  h2 {
    font-family: Chivo;
    font-size: 48px;
    font-weight: 900;
    color: #e91e63;
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-align:center;
  }
  p {
    font-family: Space Mono;
    font-size: 16px;
    font-weight: 400;
    margin-top: 0;
    margin-bottom: 1rem;
    color: #04396c;
    text-align: center;
    margin-left:auto;
    margin-right:auto;
    .bold{
        font-weight: 700;
    }
}
  }
`;
