import { Row, Col } from "react-grid-system";

import {
  AddressAndPaymentMethodContainer,
  AddressContainer,
  AddressForm,
  CheckoutContainer,
  CustomInput,
  InputWithOptionalOnEnd,
  OptionalStartAdornement,
} from "./styles";
import { ConfirmOrderCard } from "./components/ConfirmOrderCard";
import { ButtonMText, TitleXS } from "../../components/Typography";
import { PaymentMethod } from "./components/PaymentMethod";
import { OrderSectionTitle } from "./components/OrderSectionTitle/OrderSectionTitle";
import { MapPinLine } from "phosphor-react";
import * as zod from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { OrderContext } from "../../contexts/OrderContext";
import { useContext } from "react";

const checkoutFormValidationSchema = zod.object({
  cep: zod.string().min(1, "Informe o cep"),
  rua: zod.string().min(1, "Informe a rua"),
  numero: zod.string().min(1, "Informe o número da rua"),
  complemento: zod.string().optional(),
  bairro: zod.string().min(1, "Informe o bairro"),
  cidade: zod.string().min(1, "Informe a cidade"),
  uf: zod.string().min(1, "Informe o UF"),
  paymentMethod: zod.enum([
    "Cartão de Crédito",
    "Cartão de Débito",
    "Dinheiro",
  ]),
});

type CheckoutFormData = zod.infer<typeof checkoutFormValidationSchema>;

export function Checkout() {
  const { finishOrder } = useContext(OrderContext);
  const navigate = useNavigate();

  const orderForm = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormValidationSchema),
    defaultValues: {
      cep: "",
      rua: "",
      numero: "",
      complemento: "",
      bairro: "",
      cidade: "",
      uf: "",
      paymentMethod: undefined,
    },
  });

  const { handleSubmit, register, getValues } = orderForm;

  const handleFinishOrder = () => {
    const orderValues = getValues();
    finishOrder(orderValues);
    navigate("/summary");
  };

  return (
    <form onSubmit={handleSubmit(handleFinishOrder)} action="">
      <FormProvider {...orderForm}>
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
                    <CustomInput
                      id="cep"
                      placeholder="CEP"
                      {...register("cep")}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <CustomInput
                      id="rua"
                      placeholder="Rua"
                      {...register("rua")}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} lg={4}>
                    <CustomInput
                      id="numero"
                      placeholder="Número"
                      {...register("numero")}
                    />
                  </Col>
                  <Col xs={12} md={12}>
                    <div style={{ position: "relative" }}>
                      <InputWithOptionalOnEnd
                        id="complemento"
                        placeholder="Complemento"
                        {...register("complemento")}
                      />
                      <OptionalStartAdornement color="base-label">
                        Opcional
                      </OptionalStartAdornement>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={4}>
                    <CustomInput
                      id="bairro"
                      placeholder="Bairro"
                      {...register("bairro")}
                    />
                  </Col>
                  <Col xs={12} md={6}>
                    <CustomInput
                      id="cidade"
                      placeholder="Cidade"
                      {...register("cidade")}
                    />
                  </Col>
                  <Col xs={12} md={2}>
                    <CustomInput id="uf" placeholder="UF" {...register("uf")} />
                  </Col>
                </Row>
              </AddressForm>
            </AddressContainer>
            <PaymentMethod />
          </AddressAndPaymentMethodContainer>
          <ConfirmOrderCard />
        </CheckoutContainer>
      </FormProvider>
    </form>
  );
}
