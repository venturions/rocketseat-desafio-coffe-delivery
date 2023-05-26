import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Money,
  Bank,
} from "phosphor-react";
import { Row, Col, Container } from "react-grid-system";

import {
  AddressAndPaymentMethodContainer,
  AddressContainer,
  AddressContent,
  CheckoutContainer,
  ContentSubtitleContainer,
  CustomButton,
  CustomInput,
  FormContainer,
  PaymentMethodContainer,
  PaymentMethodContent,
} from "./styles";
import { useEffect, useState } from "react";
import { ConfirmOrderCard } from "./components/ConfirmOrderCard";
import {
  ButtonMText,
  TextM,
  TextS,
  TitleXS,
} from "../../components/Typography";

export function Checkout() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  const handleSelectPaymentMethod = (paymentMethod: string) => {
    setSelectedPaymentMethod(paymentMethod);
  };

  useEffect(() => {
    console.log(selectedPaymentMethod);
  }, [selectedPaymentMethod]);

  return (
    <CheckoutContainer>
      <AddressAndPaymentMethodContainer>
        <TitleXS color="base-subtitle">Complete seu pedido</TitleXS>
        <AddressContainer>
          <AddressContent>
            <MapPinLine alt="" size={22} />
            <ContentSubtitleContainer>
              <TextM color="base-subtitle">Endereço de entrega</TextM>
              <TextS color="base-text">
                Informe o endereço onde deseja receber seu pedido
              </TextS>
            </ContentSubtitleContainer>
          </AddressContent>
          <FormContainer>
            <Row>
              <Col xs={12} lg={4}>
                <CustomInput placeholder="CEP" />
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <CustomInput placeholder="Rua" />
              </Col>
            </Row>
            <Row>
              <Col xs={12} lg={4}>
                <CustomInput placeholder="Número" />
              </Col>
              <Col xs={12} md={8}>
                <CustomInput placeholder="Complemento" />
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={4}>
                <CustomInput placeholder="Bairro" />
              </Col>
              <Col xs={12} md={6}>
                <CustomInput placeholder="Cidade" />
              </Col>
              <Col xs={12} md={2}>
                <CustomInput placeholder="UF" />
              </Col>
            </Row>
          </FormContainer>
        </AddressContainer>
        <PaymentMethodContainer>
          <PaymentMethodContent>
            <CurrencyDollar alt="Símbolo da sigra de um dólar" size={22} />
            <ContentSubtitleContainer>
              <TextM color="base-subtitle">Pagamento</TextM>
              <TextS color="base-text">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </TextS>
            </ContentSubtitleContainer>
          </PaymentMethodContent>
          <Container>
            <Row>
              <Col sm={12} md={4}>
                <CustomButton
                  onClick={() => handleSelectPaymentMethod("Cartão de crédito")}
                >
                  <CreditCard alt="Símbolo da sigra de um dólar" size={14} />
                  <ButtonMText color="base-text">Cartão de crédito</ButtonMText>
                </CustomButton>
              </Col>

              <Col sm={12} md={4}>
                <CustomButton
                  onClick={() => handleSelectPaymentMethod("Cartão de débito")}
                >
                  <Bank alt="Símbolo da sigra de um dólar" size={14} />
                  <ButtonMText color="base-text">Cartão de débito</ButtonMText>
                </CustomButton>
              </Col>
              <Col sm={12} md={4}>
                <CustomButton
                  onClick={() => handleSelectPaymentMethod("Dinheiro")}
                >
                  <Money alt="Símbolo da sigra de um dólar" size={14} />
                  <ButtonMText color="base-text">Dinheiro</ButtonMText>
                </CustomButton>
              </Col>
            </Row>
          </Container>
        </PaymentMethodContainer>
      </AddressAndPaymentMethodContainer>
      <ConfirmOrderCard />
    </CheckoutContainer>
  );
}
