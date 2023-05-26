import styled from "styled-components";

export const CoffeeCardContainer = styled.main`
  padding: 1rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 6px 36px;
  background: ${(props) => props.theme["base-card"]};
  height: 310px;

  @media screen and (max-width: 900px) {
    max-width: none;
  }

  @media screen and (max-width: 680px) {
    grid-template-columns: 1fr;
  }

  img {
    position: relative;
    top: -30px;
  }
`;

export const Name = styled.div`
  margin-top: 1rem;
`;

export const Description = styled.div`
  margin-top: 0.5rem;
  text-align: center;
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;

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
  gap: 4px;
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 16px;

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 8px;
    border: 0;

    width: 38px;
    height: 38px;

    background: ${(props) => props.theme["purple-dark"]};
    border-radius: 6px;

    svg {
      color: ${(props) => props.theme["white"]};
    }

    :hover {
      background: ${(props) => props.theme["purple"]};
    }
    :focus {
      box-shadow: none;
    }
  }
`;
