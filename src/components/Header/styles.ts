import styled from "styled-components";

interface CartButtonProps {
  numberofitems: number;
}

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
  }

  > button {
    background: ${(props) => props.theme.background};
  }
`;

export const LocationContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  background: ${(props) => props.theme["purple-light"]};
  border-radius: 6px;

  svg {
    color: ${(props) => props.theme["purple"]};
  }

  p {
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const CartButton = styled.button<CartButtonProps>`
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme["yellow-dark"]};
  background: ${(props) => props.theme["yellow-light"]};
  border-radius: 6px;

  :active {
    box-shadow: 0 0 0 2px ${(props) => props.theme.yellow};
  }
  position: relative;

  &::after {
    display: ${(props) => (props.numberofitems > 0 ? "flex" : "none")};
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;

    content: ${(props) => props.numberofitems && `"${props.numberofitems}"`};
    position: absolute;
    width: 20px;
    height: 20px;
    right: -8.35px;
    top: -8px;

    background: ${(props) => props.theme["yellow-dark"]};
    border-radius: 50%;

    font-family: "Roboto";
    font-weight: 700;
    font-size: 0.75rem;
    text-align: center;
    letter-spacing: -0.06em;

    color: ${(props) => props.theme.white};
  }
`;
