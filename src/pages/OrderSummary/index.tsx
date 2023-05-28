import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { OrderSummaryContainer, Summary } from "./styles";
import { TextWithIcon } from "../../components/TextWithIcon";
import { TextL, TextM, TitleL } from "../../components/Typography";
import { OrderContext } from "../../contexts/OrderContext";
import { useContext } from "react";
import summaryImage from "../../assets/images/summaryImage.svg";

export function OrderSummary() {
  const { finishedOrder } = useContext(OrderContext);

  return (
    <OrderSummaryContainer>
      <TitleL color="yellow-dark">Uhu! Pedido confirmado</TitleL>
      <TextL color="base-subtitle">
        Agora é só aguardar que logo o café chegará até você
      </TextL>
      <div>
        <Summary>
          <TextWithIcon
            icon={<MapPin weight="fill" size={22} />}
            text={
              <TextM color="base-text">
                Entrega em{" "}
                <b>
                  {finishedOrder.rua}, {finishedOrder.numero}
                </b>
                <br />
                {finishedOrder.bairro} - {finishedOrder.cidade},{" "}
                {finishedOrder.uf}
              </TextM>
            }
            iconBackgroundColor="purple"
          />
          <TextWithIcon
            icon={<Timer weight="fill" size={22} />}
            text={
              <TextM color="base-text">
                Previsão de entrega<br></br>
                <b>20 min - 30 min</b>
              </TextM>
            }
            iconBackgroundColor="yellow"
          />
          <TextWithIcon
            icon={<CurrencyDollar weight="fill" size={22} />}
            text={
              <TextM color="base-text">
                Pagamento na entrega
                <br />
                <b> {finishedOrder.paymentMethod}</b>
              </TextM>
            }
            iconBackgroundColor="yellow-dark"
          />
        </Summary>
        <div>
          <img
            src={summaryImage}
            alt="Imagem de um entregador levando a sua encomenda"
          ></img>
        </div>
      </div>
    </OrderSummaryContainer>
  );
}
