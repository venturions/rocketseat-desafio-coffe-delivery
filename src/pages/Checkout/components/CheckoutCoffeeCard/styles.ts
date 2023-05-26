import styled from "styled-components";

export const CheckoutCoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 8px 4px;
  gap: 20px;

  width: 368px;
  height: 80px;

  @media screen and (max-width: 1040px) {
    width: 100%;
  }

  @media screen and (max-width: 500px) {
    img {
      display: none;
    }

    padding: 0;
    gap: 0;
  }

  background: ${(props) => props.theme["base-card"]};
`;

export const TitleAndPriceContainer = styled.div`
  font-family: "Roboto";
  font-size: 1rem;
  line-height: 130%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 1rem;

  color: ${(props) => props.theme["base-subtitle"]};

  span {
    font-weight: 700;
    text-align: right;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const CoffeeDetailsContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const CounterAndButtonContainer = styled.div`
  display: flex;
  gap: 8px;

  button {
    border: 0;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 8px;
    gap: 4px;

    width: 91px;
    height: 32px;

    background: ${(props) => props.theme["base-button"]};
    border-radius: 6px;

    font-family: "Roboto";
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 160%;

    text-transform: uppercase;

    color: ${(props) => props.theme["base-text"]};

    :hover {
      background: ${(props) => props.theme["base-hover"]};
    }

    svg {
      color: ${(props) => props.theme["purple"]};
    }
  }
`;
