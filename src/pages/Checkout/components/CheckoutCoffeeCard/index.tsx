import { Trash } from "phosphor-react";
import { Counter } from "../../../../components/Counter";
import { Divider } from "../ConfirmOrderCard/styles";
import {
  CheckoutCoffeeCardContainer,
  CoffeeDetailsContainer,
  CounterAndButtonContainer,
  TitleAndPriceContainer,
} from "./styles";

export function CheckoutCoffeeCard() {
  return (
    <>
      <CheckoutCoffeeCardContainer>
        <div>
          <img
            src="src/assets/images/coffes/expresso.svg"
            alt="Foto de um café"
            width="64"
            height="64"
          />
        </div>
        <CoffeeDetailsContainer>
          <TitleAndPriceContainer>
            <label>Expresso Tradicional</label>
            <span>R$ 9,90</span>
          </TitleAndPriceContainer>
          <CounterAndButtonContainer>
            <Counter />
            <button>
              <Trash weight="bold" size={14} /> Remover
            </button>
          </CounterAndButtonContainer>
        </CoffeeDetailsContainer>
      </CheckoutCoffeeCardContainer>
      <Divider />
    </>
  );
}
