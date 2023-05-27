import { Minus, Plus } from "phosphor-react";
import { CounterContainer } from "./styles";
import { TextM } from "../Typography";

interface CounterProps {
  coffeeQuantity: number;
  handleAddCoffeeQuantity: () => void;
  handleSubCoffeeQuantity: () => void;
}

export function Counter({
  coffeeQuantity,
  handleAddCoffeeQuantity,
  handleSubCoffeeQuantity,
}: CounterProps) {
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
