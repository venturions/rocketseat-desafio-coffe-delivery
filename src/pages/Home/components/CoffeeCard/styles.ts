import styled from "styled-components";

export const CoffeeCardContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* max-width: 256px; */
  height: 310px;
  background: ${(props) => props.theme["base-card"]};

  @media screen and (max-width: 900px) {
    max-width: none;
  }

  @media screen and (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const Name = styled.h1`
  margin-top: 1rem;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 130%;

  display: flex;
  align-items: flex-end;
  text-align: center;

  color: ${(props) => props.theme["base-subtitle"]};
`;

export const Description = styled.label`
  margin-top: 0.5rem;
  font-family: "Roboto";
  font-size: 0.875rem;
  line-height: 130%;
  text-align: center;

  color: ${(props) => props.theme["base-label"]};
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 4px;

  margin-top: 12px;

  width: 152px;
  height: 21px;
`;

export const Tag = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;

  width: 81px;
  height: 21px;

  background: ${(props) => props.theme["yellow-light"]};
  border-radius: 100px;

  font-family: "Roboto";
  font-weight: 700;
  font-size: 0.625rem;
  line-height: 130%;

  text-transform: uppercase;

  color: ${(props) => props.theme["yellow-dark"]};
`;

export const PriceAndCounterContainer = styled.div`
  margin-top: 33px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 29px;
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${(props) => props.theme["base-text"]};
  gap: 4px;

  span {
    font-family: "Roboto";
    font-size: 0.875rem;
    line-height: 18px;
  }
  label {
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 31px;
  }
`;
