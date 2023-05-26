import { Row, Col } from "react-grid-system";

import {
  AddressAndPaymentMethodContainer,
  AddressContainer,
  AddressForm,
  CheckoutContainer,
  CustomInput,
} from "./styles";
import { useEffect, useState } from "react";
import { ConfirmOrderCard } from "./components/ConfirmOrderCard";
import { TitleXS } from "../../components/Typography";
import { PaymentMethod } from "./components/PaymentMethod";
import { OrderSectionTitle } from "./components/OrderSectionTitle/OrderSectionTitle";
import { MapPinLine } from "phosphor-react";

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
          <OrderSectionTitle
            icon={<MapPinLine alt="" size={22} />}
            iconColor="yellow-dark"
            title="Endereço de Entrega"
            subtitle="Informe o endereço onde deseja receber seu pedido"
          />
          <AddressForm>
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
          </AddressForm>
        </AddressContainer>
        <PaymentMethod handleSelectPaymentMethod={handleSelectPaymentMethod} />
      </AddressAndPaymentMethodContainer>
      <ConfirmOrderCard />
    </CheckoutContainer>
  );
}
