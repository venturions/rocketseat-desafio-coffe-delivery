import { useNavigate } from "react-router-dom";
import { CartButton, HeaderContainer, LocationContainer } from "./styles";
import { ShoppingCart, MapPin } from "phosphor-react";
import { TextS } from "../Typography";
import { OrderContext } from "../../contexts/OrderContext";
import { useContext } from "react";
import CoffeeDeliveryLogo from "../../assets/images/coffeDeliveryLogo.svg";

export function Header() {
  const { cartItems } = useContext(OrderContext);
  const navigate = useNavigate();

  const cartIsEmpty = cartItems.length < 1;

  return (
    <HeaderContainer>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        <img
          src={CoffeeDeliveryLogo}
          alt="Um copo de café com um foguete desenhado e ao lado está escrito Coffe Delivery"
        ></img>
      </button>
      <nav>
        <LocationContainer>
          <MapPin weight="fill" alt="" size={22} />
          <TextS color="purple-dark">Porto Alegre, RS</TextS>
        </LocationContainer>
        <CartButton
          numberofitems={cartItems?.length}
          disabled={cartIsEmpty}
          onClick={() => {
            navigate("/checkout");
          }}
        >
          <ShoppingCart
            weight="fill"
            alt="Icone de um carrinho de compras"
            size={22}
          />
        </CartButton>
      </nav>
    </HeaderContainer>
  );
}
