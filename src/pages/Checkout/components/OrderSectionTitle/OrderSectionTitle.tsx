import { TextM, TextS } from "../../../../components/Typography";
import { ColorTypes } from "../../../../styles/theme/default";
import { OrderSectionContent, OrderSectionTitleAndSubtitle } from "./styles";

interface OrderSectionTitle {
  icon: JSX.Element;
  iconColor: ColorTypes;
  title: string;
  subtitle: string;
}

export function OrderSectionTitle({
  icon,
  title,
  subtitle,
  iconColor,
}: OrderSectionTitle) {
  return (
    <OrderSectionContent iconColor={iconColor}>
      {icon}
      <OrderSectionTitleAndSubtitle>
        <TextM color="base-subtitle">{title}</TextM>
        <TextS color="base-text">{subtitle}</TextS>
      </OrderSectionTitleAndSubtitle>
    </OrderSectionContent>
  );
}
