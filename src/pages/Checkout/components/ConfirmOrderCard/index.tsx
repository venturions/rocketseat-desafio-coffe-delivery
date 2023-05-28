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
import { OrderContext } from "../../../../contexts/OrderContext";
import { useContext, useEffect, useState } from "react";
import { numberToBRL } from "../../../../utils/numberToBRL";

export function ConfirmOrderCard() {
  const { cartItems } = useContext(OrderContext);

  const [totalValue, setTotalValue] = useState<number>(0);

  useEffect(() => {
    let calculatedTotalValue = 0;

    cartItems.forEach((item) => {
      calculatedTotalValue += item.coffeePrice * item.quantity;
    });

    setTotalValue(calculatedTotalValue);
  }, [cartItems]);

  return (
    <>
      <ConfirmOrderSection>
        <TitleXS color="base-subtitle">Cafés selecionados</TitleXS>
        <ConfirmOrderContainer>
          {cartItems.map((cartItem) => {
            return (
              <CheckoutCoffeeCard
                key={cartItem.coffeeName}
                coffeeDetails={cartItem}
              />
            );
          })}
          <ResumeContainer>
            <div>
              <TextS color="base-text">Total de itens</TextS>
              <TextS color="base-text">{numberToBRL(totalValue, true)}</TextS>
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
                {numberToBRL(totalValue + 3.5, true)}
              </TextL>
            </OrderTotal>
            <button type="submit">
              <ButtonGText>Confirmar Pedido</ButtonGText>
            </button>
          </ResumeContainer>
        </ConfirmOrderContainer>
      </ConfirmOrderSection>
    </>
  );
}
