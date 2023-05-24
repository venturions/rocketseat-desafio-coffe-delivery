import styled from "styled-components";
import { Container } from "react-grid-system";

export const CheckoutContainer = styled.div`
  margin-top: 72px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1040px) {
    display: inline-block;
    justify-content: center;
  }
`;

export const AddressAndPaymentMethodContainer = styled.div`
  h1 {
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;

    display: flex;
    align-items: center;

    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const BaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  border-radius: 6px;
`;

export const AddressContainer = styled(BaseContainer)`
  margin-top: 15px;
  background: ${(props) => props.theme["base-card"]};

  font-family: "Roboto";
  line-height: 130%;
`;

export const AddressContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;

  > svg {
    color: ${(props) => props.theme["yellow-dark"]};
  }
`;

export const PaymentMethodContent = styled(AddressContent)`
  > svg {
    color: ${(props) => props.theme["purple"]};
  }
`;

export const PaymentMethodContainer = styled(BaseContainer)`
  margin-top: 12px;

  gap: 32px;
  background: ${(props) => props.theme["base-card"]};
`;

export const ContentSubtitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  height: 44px;

  font-family: "Roboto";
  gap: 2px;

  span {
    font-size: 1rem;

    display: flex;
    align-items: center;

    color: ${(props) => props.theme["base-subtitle"]};
  }

  label {
    font-size: 0.875rem;

    display: flex;
    align-items: center;

    color: ${(props) => props.theme["base-text"]};
  }
`;

export const FormContainer = styled(Container)`
  margin-top: 2rem;
`;

export const CustomInput = styled.input`
  width: 100%;
  margin-bottom: 16px;

  box-sizing: border-box;

  padding: 12px;

  height: 42px;

  background: ${(props) => props.theme["base-input"]};

  border: 1px solid ${(props) => props.theme["base-button"]};
  border-radius: 4px;

  font-family: "Roboto";
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 130%;

  color: ${(props) => props.theme["base-label"]};
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

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 160%;

  text-transform: uppercase;

  color: ${(props) => props.theme["base-text"]};

  border: 1px solid transparent;
  box-shadow: none;

  @media screen and (max-width: 767px) {
    width: 100%;
    margin-top: 1rem;
  }

  :hover {
    cursor: pointer;
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
