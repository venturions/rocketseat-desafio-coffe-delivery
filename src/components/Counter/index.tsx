import { Minus, Plus } from "phosphor-react";
import { CounterContainer } from "./styles";
import { TextM } from "../Typography";
import { useState } from "react";

export function Counter() {
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

  return (
    <CounterContainer>
      <button onClick={handleSubCoffeeQuantity}>
        <Minus weight="bold" size={14} />
      </button>
      <TextM color="base-title">{coffeeQuantity}</TextM>
      <button onClick={handleAddCoffeeQuantity}>
        <Plus weight="bold" size={14} />
      </button>
    </CounterContainer>
  );
}
