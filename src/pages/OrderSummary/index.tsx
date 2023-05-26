import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { OrderSummaryContainer, Summary } from "./styles";
import { TextWithIcon } from "../../components/TextWithIcon";
import { TextL, TextM, TitleL } from "../../components/Typography";

export function OrderSummary() {
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
                Entrega em <b>Rua João Daniel Martinelli, 102</b>
                <br />
                Farrapos - Porto Alegre, RS
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
                <b> Cartão de Crédito</b>
              </TextM>
            }
            iconBackgroundColor="yellow-dark"
          />
        </Summary>
        <div>
          <img
            src="src/assets/images/summaryImage.svg"
            alt="Imagem de um entregador levando a sua encomenda"
          ></img>
        </div>
      </div>
    </OrderSummaryContainer>
  );
}
