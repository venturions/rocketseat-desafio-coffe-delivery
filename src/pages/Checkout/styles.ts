import styled from "styled-components";
import { Container } from "react-grid-system";

export const CheckoutContainer = styled.div`
  margin-top: 72px;
  display: flex;
  justify-content: space-between;
  gap: 24px;

  @media screen and (max-width: 1040px) {
    display: inline-block;
    justify-content: center;
  }
`;

export const AddressAndPaymentMethodContainer = styled.div`
  h1 {
    display: flex;
    align-items: center;
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

export const AddressForm = styled(Container)`
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

  :focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme.yellow};
  }
`;

export const InputWithOptionalOnEnd = styled(CustomInput)`
  position: relative;
  padding-left: 80px;

  @media screen and (max-width: 390px) {
    padding-left: 12px;
  }
`;

export const OptionalStartAdornement = styled.span`
  position: absolute;
  top: 22px;
  left: 12px;
  transform: translateY(-50%);

  font-family: "Roboto";
  font-style: italic;
  font-size: 0.75rem;

  color: ${(props) => props.theme["base-label"]};

  @media screen and (max-width: 390px) {
    display: none;
  }
`;
