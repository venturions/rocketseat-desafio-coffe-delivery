import {
  Content,
  ContentContainer,
  ContentInformation,
  CustomCoffeeIcon,
  CustomPackageIcon,
  CustomShoppingCartIcon,
  CustomTimerIcon,
} from "./styles";

export function Home() {
  return (
    <ContentContainer>
      <Content>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>

        <ContentInformation>
          <label>
            <CustomShoppingCartIcon
              weight="fill"
              alt="Icone de um carrinho de compras"
              size={16}
            />
            Compra simples e segura
          </label>
          <label>
            <CustomPackageIcon
              weight="fill"
              alt="Icone de um carrinho de compras"
              size={16}
            />
            Embalagem mantém o café intacto
          </label>
          <label>
            <CustomTimerIcon
              weight="fill"
              alt="Icone de um carrinho de compras"
              size={16}
            />
            Entrega rápida e rastreada
          </label>
          <label>
            <CustomCoffeeIcon
              weight="fill"
              alt="Icone de um carrinho de compras"
              size={16}
            />
            O café chega fresquinho até você
          </label>
        </ContentInformation>
      </Content>
      <img src="src/assets/images/background.svg"></img>
    </ContentContainer>
  );
}
