import styled from "styled-components";
import { ColorTypes } from "../../styles/theme/default";

interface TextWithIconProps {
  iconBackgroundColor: ColorTypes;
  iconColor: ColorTypes;
}

export const DeliveryInfoContainer = styled.div<TextWithIconProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;

  > div {
    svg {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 8px;
      gap: 8px;

      width: 32px;
      height: 32px;

      background: ${(props) => props.theme[props.iconBackgroundColor]};
      border-radius: 50%;

      color: ${(props) => props.theme[props.iconColor]};
    }
  }
`;
