import { NavLink, useNavigate } from "react-router-dom";
import { HeaderContainer, LocationContainer } from "./styles";
import { ShoppingCart, MapPin } from "phosphor-react";
import { TextS } from "../Typography";

export function Header() {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        <img
          src="src/assets/images/coffeDeliveryLogo.svg"
          alt="Um copo de café com um foguete desenhado e ao lado está escrito Coffe Delivery"
        ></img>
      </button>
      <nav>
        <LocationContainer>
          <MapPin weight="fill" alt="" size={22} />
          <TextS color="purple-dark">Porto Alegre, RS</TextS>
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
