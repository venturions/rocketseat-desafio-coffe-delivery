import { ColorTypes } from "../../styles/theme/default";
import { DeliveryInfoContainer } from "./styles";

interface TextWithIconProps {
  icon: JSX.Element;
  text: string | JSX.Element;
  iconBackgroundColor: ColorTypes;
  iconColor?: ColorTypes;
}

export function TextWithIcon({
  icon,
  text,
  iconBackgroundColor,
  iconColor = "white",
}: TextWithIconProps) {
  return (
    <DeliveryInfoContainer
      iconBackgroundColor={iconBackgroundColor}
      iconColor={iconColor}
    >
      <div>{icon}</div>
      <div>{text}</div>
    </DeliveryInfoContainer>
  );
}
