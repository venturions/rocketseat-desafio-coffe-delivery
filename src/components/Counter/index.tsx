import { Minus, Plus } from "phosphor-react";
import { CounterContainer } from "./styles";

export function Counter() {
  return (
    <CounterContainer>
      <Minus weight="bold" size={14} />
      <span>1</span>
      <Plus weight="bold" size={14} />
    </CounterContainer>
  );
}
