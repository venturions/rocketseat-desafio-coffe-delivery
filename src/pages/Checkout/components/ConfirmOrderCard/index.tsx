import { useNavigate } from "react-router-dom";
import { CheckoutCoffeeCard } from "../CheckoutCoffeeCard";

import {
  ConfirmOrderContainer,
  ConfirmOrderSection,
  OrderTotal,
  ResumeContainer,
} from "./styles";
import {
  ButtonGText,
  TextL,
  TextS,
  TitleXS,
} from "../../../../components/Typography";

export function ConfirmOrderCard() {
  const navigate = useNavigate();

  return (
    <>
      <ConfirmOrderSection>
        <TitleXS color="base-subtitle">Cafés selecionados</TitleXS>
        <ConfirmOrderContainer>
          <CheckoutCoffeeCard />
          <CheckoutCoffeeCard />
          <ResumeContainer>
            <div>
              <TextS color="base-text">Total de itens</TextS>
              <TextS color="base-text">R$ 29,70</TextS>
            </div>
            <div>
              <TextS color="base-text">Entrega</TextS>
              <TextS color="base-text">R$ 3,50</TextS>
            </div>
            <OrderTotal>
              <TextL bold color="base-subtitle">
                Total
              </TextL>
              <TextL bold color="base-subtitle">
                R$ 33,20
              </TextL>
            </OrderTotal>
            <button
              onClick={() => {
                navigate("/summary");
              }}
            >
              <ButtonGText>Confirmar Pedido</ButtonGText>
            </button>
          </ResumeContainer>
        </ConfirmOrderContainer>
      </ConfirmOrderSection>
    </>
  );
}
