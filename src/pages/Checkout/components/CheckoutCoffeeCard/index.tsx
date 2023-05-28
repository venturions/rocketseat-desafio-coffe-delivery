import { Trash } from "phosphor-react";
import { Counter } from "../../../../components/Counter";
import { Divider } from "../ConfirmOrderCard/styles";
import {
  CheckoutCoffeeCardContainer,
  CoffeeDetailsContainer,
  CounterAndButtonContainer,
  RemoveButton,
  TitleAndPriceContainer,
} from "./styles";
import { CartItemsType } from "../../../../models/cartItems";
import { numberToBRL } from "../../../../utils/numberToBRL";
import { convertToCamelCase } from "../../../../utils/toCamelCase";
import { OrderContext } from "../../../../contexts/OrderContext";
import { useContext } from "react";

interface CheckoutCoffeeCardProps {
  coffeeDetails: CartItemsType;
}

export function CheckoutCoffeeCard({ coffeeDetails }: CheckoutCoffeeCardProps) {
  const { subCartItem, sumCartItem, removeCartItem } = useContext(OrderContext);

  function handleAddCoffeeQuantity() {
    sumCartItem(coffeeDetails);
  }

  function handleSubCoffeeQuantity() {
    if (coffeeDetails.quantity > 1) {
      subCartItem(coffeeDetails);
    }
  }

  function handleRemoveCartItem() {
    removeCartItem(coffeeDetails);
  }

  return (
    <>
      <CheckoutCoffeeCardContainer>
        <div>
          <img
            src={`src/assets/images/coffes/${convertToCamelCase(
              coffeeDetails.coffeeName
            )}.svg`}
            alt="Foto de um café"
            width="64"
            height="64"
          />
        </div>
        <CoffeeDetailsContainer>
          <TitleAndPriceContainer>
            <label>{coffeeDetails.coffeeName}</label>
            <span>
              {numberToBRL(
                coffeeDetails.coffeePrice * coffeeDetails.quantity,
                true
              )}
            </span>
          </TitleAndPriceContainer>
          <CounterAndButtonContainer>
            <Counter
              coffeeQuantity={coffeeDetails.quantity}
              handleAddCoffeeQuantity={handleAddCoffeeQuantity}
              handleSubCoffeeQuantity={handleSubCoffeeQuantity}
            />
            <RemoveButton type="button" onClick={handleRemoveCartItem}>
              <Trash weight="bold" size={14} /> Remover
            </RemoveButton>
          </CounterAndButtonContainer>
        </CoffeeDetailsContainer>
      </CheckoutCoffeeCardContainer>
      <Divider />
    </>
  );
}
