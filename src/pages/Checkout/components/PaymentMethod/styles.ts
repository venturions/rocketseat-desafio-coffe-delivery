import styled from "styled-components";

export const PaymentMethodContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;

  > svg {
    color: ${(props) => props.theme["purple"]};
  }
`;

export const PaymentMethodContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  border-radius: 6px;

  margin-top: 12px;

  gap: 32px;
  background: ${(props) => props.theme["base-card"]};
`;

export const CustomButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 12px;
  border: 0;

  width: 178.67px;
  height: 51px;

  background: ${(props) => props.theme["base-button"]};
  border-radius: 6px;

  text-transform: uppercase;

  border: 1px solid transparent;
  box-shadow: none;

  @media screen and (max-width: 767px) {
    width: 100%;
    margin-top: 1rem;
  }

  :hover {
    background: ${(props) => props.theme["base-hover"]};
  }

  :focus {
    background: ${(props) => props.theme["purple-light"]};
    border: 1px solid ${(props) => props.theme["purple"]};
  }

  svg {
    color: ${(props) => props.theme["purple"]};
  }
`;
