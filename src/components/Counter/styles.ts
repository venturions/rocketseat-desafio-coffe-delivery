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

  > svg {
    color: ${(props) => props.theme.purple};

    :hover {
      cursor: pointer;
    }
  }

  p {
    width: 20px;
    height: 21px;
    text-align: center;
  }
`;
