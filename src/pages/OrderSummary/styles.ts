import styled from "styled-components";

export const OrderSummaryContainer = styled.div`
  margin-top: 80px;
  width: auto;

  display: flex;
  flex-direction: column;

  > p {
    margin-top: 4px;
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (max-width: 1140px) {
    > p,
    h1 {
      display: flex;
      justify-content: center;
    }

    > div {
      display: flex;
      flex-direction: column-reverse;
      justify-content: center;
      margin-top: 2rem;
    }
  }

  @media screen and (max-width: 500px) {
    img {
      display: none;
    }
  }
`;
export const Summary = styled.main`
  margin-top: 40px;
  box-sizing: border-box;
  background: ${(props) => props.theme["background"]};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 32px;

  border-radius: 6px 36px;
  width: 526px;

  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }

  @media screen and (max-width: 767px) {
    width: auto;
  }
`;
