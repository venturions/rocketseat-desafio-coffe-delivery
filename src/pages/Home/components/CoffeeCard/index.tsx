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
import { CoffeeCardProps } from "../../../../models/coffeeCard";
import { numberToBRL } from "../../../../utils/numberToBRL";
import { convertToCamelCase } from "../../../../utils/toCamelCase";
import { useContext, useState } from "react";
import { OrderContext } from "../../../../contexts/OrderContext";

export function CoffeeCard({
  name,
  description,
  tags,
  price,
}: CoffeeCardProps) {
  const { setItemInCart } = useContext(OrderContext);

  const [coffeeQuantity, setCoffeeQuantity] = useState(1);

  function handleAddCoffeeQuantity() {
    setCoffeeQuantity((state) => {
      return state + 1;
    });
  }

  function handleSubCoffeeQuantity() {
    if (coffeeQuantity > 1) {
      setCoffeeQuantity((state) => {
        return state - 1;
      });
    }
  }

  function handleAddCoffeeToCart() {
    const selectedCoffee = {
      coffeeName: name,
      quantity: coffeeQuantity,
      coffeePrice: price,
    };

    setItemInCart(selectedCoffee);
    setCoffeeQuantity(1);
  }

  return (
    <CoffeeCardContainer>
      <img
        src={`src/assets/images/coffes/${convertToCamelCase(name)}.svg`}
        alt="Foto de um café"
      />
      <TagsContainer>
        {tags.map((item) => {
          return (
            <Tag key={item}>
              <TagText color="yellow-dark">{item}</TagText>
            </Tag>
          );
        })}
      </TagsContainer>
      <Name>
        <TitleS color="base-subtitle">{name}</TitleS>
      </Name>
      <Description>
        <TextS color="base-label">{description}</TextS>
      </Description>

      <PriceAndCounterContainer>
        <Price>
          <TextS color="base-text">R$</TextS>
          <TitleM color="base-text">{numberToBRL(price)}</TitleM>
        </Price>
        <ActionsContainer>
          <Counter
            coffeeQuantity={coffeeQuantity}
            handleAddCoffeeQuantity={handleAddCoffeeQuantity}
            handleSubCoffeeQuantity={handleSubCoffeeQuantity}
          ></Counter>
          <ShoppingCartButton onClick={handleAddCoffeeToCart}>
            <ShoppingCartSimple weight="fill" size={22} />
          </ShoppingCartButton>
        </ActionsContainer>
      </PriceAndCounterContainer>
    </CoffeeCardContainer>
  );
}
