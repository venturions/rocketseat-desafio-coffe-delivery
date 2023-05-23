import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;

    a {
      padding: 0.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${(props) => props.theme["yellow-dark"]};
      background: ${(props) => props.theme["yellow-light"]};
    }
  }
`;

export const LocationContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  svg {
    color: ${(props) => props.theme["purple"]};
  }

  label {
    font-family: "Roboto";
    font-size: 0.875rem;
    line-height: 130%;

    color: ${(props) => props.theme["purple-dark"]};
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
