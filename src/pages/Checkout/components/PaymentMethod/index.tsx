import { Col, Container, Row } from "react-grid-system";
import {
  CustomButton,
  PaymentMethodContainer,
  PaymentMethodContent,
} from "./styles";
import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { ButtonMText } from "../../../../components/Typography";
import { OrderSectionTitle } from "../OrderSectionTitle/OrderSectionTitle";
import { useFormContext } from "react-hook-form";
import { useState } from "react";

export function PaymentMethod() {
  const { setValue } = useFormContext();
  const [focusedButton, setFocusedButton] = useState("");

  const handleButtonClick = (paymentMethod: string) => {
    setFocusedButton(paymentMethod);
    setValue("paymentMethod", paymentMethod);
  };

  return (
    <PaymentMethodContainer>
      <PaymentMethodContent>
        <OrderSectionTitle
          icon={<CurrencyDollar alt="Símbolo da sigra de um dólar" size={22} />}
          iconColor="purple"
          title="Pagamento"
          subtitle=" O pagamento é feito na entrega. Escolha a forma que deseja pagar"
        />
      </PaymentMethodContent>
      <Container>
        <Row>
          <Col sm={12} md={4}>
            <CustomButton
              type="button"
              focused={focusedButton === "Cartão de Crédito"}
              onClick={() => {
                handleButtonClick("Cartão de Crédito");
              }}
            >
              <CreditCard alt="Símbolo da sigra de um dólar" size={14} />
              <ButtonMText color="base-text">Cartão de crédito</ButtonMText>
            </CustomButton>
          </Col>

          <Col sm={12} md={4}>
            <CustomButton
              type="button"
              focused={focusedButton === "Cartão de Débito"}
              onClick={() => {
                handleButtonClick("Cartão de Débito");
              }}
            >
              <Bank alt="Símbolo da sigra de um dólar" size={14} />
              <ButtonMText color="base-text">Cartão de débito</ButtonMText>
            </CustomButton>
          </Col>
          <Col sm={12} md={4}>
            <CustomButton
              type="button"
              focused={focusedButton === "Dinheiro"}
              onClick={() => {
                handleButtonClick("Dinheiro");
              }}
            >
              <Money alt="Símbolo da sigra de um dólar" size={14} />
              <ButtonMText color="base-text">Dinheiro</ButtonMText>
            </CustomButton>
          </Col>
        </Row>
      </Container>
    </PaymentMethodContainer>
  );
}
