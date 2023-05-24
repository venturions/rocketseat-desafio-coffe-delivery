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
        <h1>Complete seu pedido</h1>
        <AddressContainer>
          <AddressContent>
            <MapPinLine alt="" size={22} />
            <ContentSubtitleContainer>
              <span>Endereço de entrega</span>
              <label>Informe o endereço onde deseja receber seu pedido</label>
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
              <span>Pagamento</span>
              <label>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </label>
            </ContentSubtitleContainer>
          </PaymentMethodContent>
          <Container>
            <Row>
              <Col sm={12} md={4}>
                <CustomButton
                  onClick={() => handleSelectPaymentMethod("Cartão de crédito")}
                >
                  <CreditCard alt="Símbolo da sigra de um dólar" size={14} />
                  Cartão de crédito
                </CustomButton>
              </Col>

              <Col sm={12} md={4}>
                <CustomButton
                  onClick={() => handleSelectPaymentMethod("Cartão de débito")}
                >
                  <Bank alt="Símbolo da sigra de um dólar" size={14} />
                  Cartão de débito
                </CustomButton>
              </Col>
              <Col sm={12} md={4}>
                <CustomButton
                  onClick={() => handleSelectPaymentMethod("Dinheiro")}
                >
                  <Money alt="Símbolo da sigra de um dólar" size={14} />
                  Dinheiro
                </CustomButton>
              </Col>
            </Row>
          </Container>
        </PaymentMethodContainer>
      </AddressAndPaymentMethodContainer>
      <aside style={{ width: "448px" }}>
        <h1>Cafés selecionados</h1>
      </aside>
    </CheckoutContainer>
  );
}
