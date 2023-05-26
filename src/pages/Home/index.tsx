import { ShoppingCart, Timer, Package, Coffee } from "phosphor-react";
import { TextWithIcon } from "../../components/TextWithIcon";
import { TextL, TextM, TitleL, TitleXL } from "../../components/Typography";
import { CoffeeCard } from "./components/CoffeeCard";
import {
  CoffeeListContainer,
  Content,
  ContentInformation,
  IntroSectionContainer,
  SectionContainer,
} from "./styles";

export function Home() {
  return (
    <>
      <IntroSectionContainer>
        <Content>
          <TitleXL color="base-title">
            Encontre o café perfeito para qualquer hora do dia
          </TitleXL>
          <TextL color="base-subtitle">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </TextL>

          <ContentInformation>
            <TextWithIcon
              icon={<ShoppingCart weight="fill" size={16} />}
              text={<TextM color="base-text">Compra simples e segura</TextM>}
              iconBackgroundColor="yellow-dark"
            />
            <TextWithIcon
              icon={<Package weight="fill" size={16} />}
              text={
                <TextM color="base-text">Embalagem mantem o café intacto</TextM>
              }
              iconBackgroundColor="base-text"
            />
            <TextWithIcon
              icon={<Timer weight="fill" size={16} />}
              text={<TextM color="base-text">Entrega rápida e rastreada</TextM>}
              iconBackgroundColor="yellow"
            />
            <TextWithIcon
              icon={<Coffee weight="fill" size={16} />}
              text={
                <TextM color="base-text">
                  O café chega fresquinho até você
                </TextM>
              }
              iconBackgroundColor="purple"
            />
          </ContentInformation>
        </Content>
        <img src="src/assets/images/background.svg"></img>
      </IntroSectionContainer>
      <SectionContainer>
        <CoffeeListContainer>
          <TitleL color="base-title">Nossos cafés</TitleL>
          <div>
            <CoffeeCard></CoffeeCard>
            <CoffeeCard></CoffeeCard>
            <CoffeeCard></CoffeeCard>
            <CoffeeCard></CoffeeCard>
            <CoffeeCard></CoffeeCard>
            <CoffeeCard></CoffeeCard>
            <CoffeeCard></CoffeeCard>
          </div>
        </CoffeeListContainer>
      </SectionContainer>
    </>
  );
}
