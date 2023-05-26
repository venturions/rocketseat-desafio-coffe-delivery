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
      border-radius: 6px;

      :active {
        box-shadow: 0 0 0 2px ${(props) => props.theme.yellow};
      }
    }
  }

  button {
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
