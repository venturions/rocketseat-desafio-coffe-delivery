import {
  ActionsContainer,
  CoffeeCardContainer,
  Description,
  Name,
  Price,
  PriceAndCounterContainer,
  Tag,
  TagsContainer,
} from "./styles";
import { Counter } from "../../../../components/Counter";
import { ShoppingCartSimple } from "phosphor-react";

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src="src/assets/images/coffes/expresso.svg" alt="coffee" />
      <TagsContainer>
        <Tag>Tradicional</Tag>
        <Tag>Comaaaaeite</Tag>
        <Tag>Tradicional</Tag>
      </TagsContainer>
      <Name>Expresso Tradicional</Name>
      <Description>
        O tradicional café feito com água quente e grãos moídos
      </Description>

      <PriceAndCounterContainer>
        <Price>
          <span>R$</span>
          <label>10,00</label>
        </Price>
        <ActionsContainer>
          <Counter></Counter>
          <button>
            <ShoppingCartSimple weight="fill" size={22} />
          </button>
        </ActionsContainer>
      </PriceAndCounterContainer>
    </CoffeeCardContainer>
  );
}
