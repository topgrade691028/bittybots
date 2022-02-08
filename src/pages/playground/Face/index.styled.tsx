import styled from "styled-components";
export const FaceContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FaceContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  grid-gap: 25px;
  gap: 25px;
`;
export const FaceTitle = styled.div`
  text-transform: capitalize;
  margin-right: 1rem;
  font-weight: 900;
  font-size: 24px;
  color: #04396c;
  line-height: 50px;
  span {
    color: #e91e63;
  }
`;
export const FaceDetail = styled.div`
  margin-right: 3rem;
  font-weight: 700;
  color: #04396c;
  margin-bottom: 20px;
`;

export const FaceItem = styled.div`
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  cursor: pointer;
  background-color: #eaebec;
  border-radius: 12px;
  img {
    width: 100%;
    height: 100%;
  }
  &:hover {
    border: 4px solid #e91e63;
  }
`;
