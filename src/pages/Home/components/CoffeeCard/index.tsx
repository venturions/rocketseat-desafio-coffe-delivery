import {
  ActionsContainer,
  CoffeeCardContainer,
  Description,
  Name,
  Price,
  PriceAndCounterContainer,
  ShoppingCartButton,
  Tag,
  TagsContainer,
} from "./styles";
import { Counter } from "../../../../components/Counter";
import { ShoppingCartSimple } from "phosphor-react";
import {
  TagText,
  TextS,
  TitleM,
  TitleS,
} from "../../../../components/Typography";

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src="src/assets/images/coffes/expresso.svg" alt="Foto de um café" />
      <TagsContainer>
        <Tag>
          <TagText color="yellow-dark">Tradicional</TagText>
        </Tag>
        <Tag>
          <TagText color="yellow-dark">Com leite</TagText>
        </Tag>
        <Tag>
          <TagText color="yellow-dark">Tradicional</TagText>
        </Tag>
      </TagsContainer>
      <Name>
        <TitleS color="base-subtitle">Expresso Tradicional</TitleS>
      </Name>
      <Description>
        <TextS color="base-label">
          O tradicional café feito com água quente e grãos moídos
        </TextS>
      </Description>

      <PriceAndCounterContainer>
        <Price>
          <TextS color="base-text">R$</TextS>
          <TitleM color="base-text">10,00</TitleM>
        </Price>
        <ActionsContainer>
          <Counter></Counter>
          <ShoppingCartButton>
            <ShoppingCartSimple weight="fill" size={22} />
          </ShoppingCartButton>
        </ActionsContainer>
      </PriceAndCounterContainer>
    </CoffeeCardContainer>
  );
}
