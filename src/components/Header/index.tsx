import { NavLink } from "react-router-dom";
import { HeaderContainer, LocationContainer } from "./styles";
import { ShoppingCart, MapPin } from "phosphor-react";

export function Header() {
  return (
    <HeaderContainer>
      <img
        src="src/assets/images/coffeDeliveryLogo.svg"
        alt="Um copo de café com um foguete desenhado e ao lado está escrito Coffe Delivery"
      ></img>
      <nav>
        <LocationContainer>
          <MapPin weight="fill" alt="" size={22} />
          <label>Porto Alegre, RS</label>
        </LocationContainer>
        <NavLink to="/checkout">
          <ShoppingCart
            weight="fill"
            alt="Icone de um carrinho de compras"
            size={22}
          />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
