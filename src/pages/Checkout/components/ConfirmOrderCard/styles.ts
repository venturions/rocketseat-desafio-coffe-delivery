import styled from "styled-components";

export const ConfirmOrderSection = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 24px;

  margin-top: 15px;

  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px 44px;
`;

export const ConfirmOrderContainer = styled.div`
  h1 {
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;

    display: flex;
    align-items: center;

    color: ${(props) => props.theme["base-subtitle"]};
  }

  @media screen and (max-width: 1040px) {
    margin-top: 3rem;
  }
`;

export const Divider = styled.div`
  width: 100%;
  border: 1px solid ${(props) => props.theme["base-button"]};
`;

export const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;

  width: 100%;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    gap: 8px;

    width: 100%;

    span {
      font-family: "Roboto";
      font-size: 1rem;
      line-height: 130%;

      display: flex;
      align-items: center;
      text-align: right;

      color: ${(props) => props.theme["base-text"]};
    }
  }

  button {
    margin-top: 24px;
    border: 0;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 8px;
    gap: 4px;

    width: 100%;

    background: ${(props) => props.theme["yellow"]};
    border-radius: 6px;

    font-family: "Roboto";
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 160%;

    text-transform: uppercase;

    color: ${(props) => props.theme["white"]};
    font-stretch: 100;

    @media screen and (max-width: 1040px) {
      display: flex;
      align-self: center;
      width: 50%;
    }

    @media screen and (max-width: 750px) {
      display: flex;
      align-self: center;
      width: 100%;
    }
  }
`;

export const OrderTotal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 8px;

  span {
    font-family: "Roboto";
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;

    display: flex;
    align-items: center;
    text-align: right;

    color: ${(props) => props.theme["base-subtitle"]};
  }
`;
