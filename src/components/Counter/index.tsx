import { Minus, Plus } from "phosphor-react";
import { CounterContainer } from "./styles";
import { TextM } from "../Typography";

export function Counter() {
  return (
    <CounterContainer>
      <Minus weight="bold" size={14} />
      <TextM color="base-title">1</TextM>
      <Plus weight="bold" size={14} />
    </CounterContainer>
  );
}
