import styled from "styled-components";

export const CounterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 4px;

  width: 72px;
  height: 32px;

  background: ${(props) => props.theme["base-button"]};
  border-radius: 6px;

  p {
    width: 20px;
    height: 21px;
    text-align: center;
  }

  button {
    margin: 0;
    padding: 0;
    background: transparent;
    align-self: flex-start;

    :hover {
      background: transparent;
    }

    > svg {
      color: ${(props) => props.theme.purple};
    }
  }
`;
