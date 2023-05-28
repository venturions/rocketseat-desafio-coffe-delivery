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
import { numberToBRL } from "../../../../utils/numberToBRL";
import { convertToCamelCase } from "../../../../utils/toCamelCase";
import { OrderContext } from "../../../../contexts/OrderContext";
import { useContext, useEffect, useState } from "react";
import { CartItemsType } from "../../../../@types/CartItems";
import { importCoffeeImage } from "../../../../utils/importCoffeeImage";

interface CheckoutCoffeeCardProps {
  coffeeDetails: CartItemsType;
}

export function CheckoutCoffeeCard({ coffeeDetails }: CheckoutCoffeeCardProps) {
  const { subCartItem, sumCartItem, removeCartItem } = useContext(OrderContext);
  const [loadedImage, setLoadedImage] = useState<string | null>(null);
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

  useEffect(() => {
    const image = importCoffeeImage(
      convertToCamelCase(coffeeDetails.coffeeName)
    );
    setLoadedImage(image ?? null);
  }, [coffeeDetails.coffeeName]);

  return (
    <>
      <CheckoutCoffeeCardContainer>
        <div>
          <img
            src={loadedImage ?? undefined}
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
