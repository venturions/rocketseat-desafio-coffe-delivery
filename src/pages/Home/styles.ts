import { ShoppingCart, Timer, Coffee, Package } from "phosphor-react";
import styled from "styled-components";

export const SectionContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1040px) {
    justify-content: center;
  }
`;
export const IntroSectionContainer = styled(SectionContainer)`
  margin-top: 5.875rem;

  @media screen and (max-width: 1040px) {
    > img {
      display: none;
    }
  }
`;
export const CoffeeListSectionContainer = styled(SectionContainer)`
  /* margin-top: 5.875rem; */
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 588px;

  h1 {
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;

    color: ${(props) => props.theme["base-title"]};

    @media screen and (max-width: 1140px) {
      font-size: 2.5rem;
    }
  }

  p {
    margin-top: 1rem;
    font-family: "Roboto";
    font-size: 1.25rem;
    line-height: 130%;

    color: ${(props) => props.theme["base-subtitle"]};
    font-stretch: 100;
  }
`;

export const ContentInformation = styled.div`
  margin-top: 4.175rem;
  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 20px 12px;

  label {
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 12px;

    font-family: "Roboto";
    line-height: 130%;

    color: ${(props) => props.theme["base-text"]};

    svg {
      box-sizing: content-box;
      padding: 0.5rem;
      border-radius: 50%;
      color: ${(props) => props.theme["white"]};
    }
  }

  @media screen and (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const CustomShoppingCartIcon = styled(ShoppingCart)`
  background: ${(props) => props.theme["yellow-dark"]};
`;

export const CustomTimerIcon = styled(Timer)`
  background: ${(props) => props.theme["yellow"]};
`;

export const CustomPackageIcon = styled(Package)`
  background: ${(props) => props.theme["base-text"]};
`;

export const CustomCoffeeIcon = styled(Coffee)`
  background: ${(props) => props.theme["purple"]};
`;

export const CoffeeListContainer = styled.section`
  margin-top: 140px;

  @media screen and (max-width: 1040px) {
    max-width: 588px;
  }

  > h1 {
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;

    color: ${(props) => props.theme["base-subtitle"]};

    @media screen and (max-width: 650px) {
      display: flex;
      justify-content: center;
    }
  }

  > div {
    margin-top: 32px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2rem;

    @media screen and (max-width: 1240px) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media screen and (max-width: 1040px) {
      grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 650px) {
      grid-template-columns: 1fr;
    }
  }
`;
