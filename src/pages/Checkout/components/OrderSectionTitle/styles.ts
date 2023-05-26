import styled from "styled-components";
import { ColorTypes } from "../../../../styles/theme/default";

interface OrderSectionContentProps {
  iconColor: ColorTypes;
}

export const OrderSectionContent = styled.div<OrderSectionContentProps>`
  display: flex;
  flex-direction: row;
  gap: 8px;

  > svg {
    color: ${(props) => props.theme[props.iconColor]};
  }
`;
export const OrderSectionTitleAndSubtitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  height: 44px;

  gap: 2px;
`;
