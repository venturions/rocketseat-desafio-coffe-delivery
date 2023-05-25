import { CheckoutCoffeeCard } from "../CheckoutCoffeeCard";
import {
  ConfirmOrderContainer,
  ConfirmOrderSection,
  OrderTotal,
  ResumeContainer,
} from "./styles";

export function ConfirmOrderCard() {
  return (
    <>
      <ConfirmOrderContainer>
        <h1>Cafés selecionados</h1>
        <ConfirmOrderSection>
          <CheckoutCoffeeCard />
          <CheckoutCoffeeCard />
          <ResumeContainer>
            <div>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <OrderTotal>
              <h1>Total</h1>
              <h1>R$ 33,20</h1>
            </OrderTotal>
            <button>Confirmar Pedido</button>
          </ResumeContainer>
        </ConfirmOrderSection>
      </ConfirmOrderContainer>
    </>
  );
}
