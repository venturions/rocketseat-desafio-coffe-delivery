import { useNavigate } from "react-router-dom";
import { CartButton, HeaderContainer, LocationContainer } from "./styles";
import { ShoppingCart, MapPin } from "phosphor-react";
import { TextS } from "../Typography";
import { OrderContext } from "../../contexts/OrderContext";
import { useContext, useEffect } from "react";

export function Header() {
  const { cartItems } = useContext(OrderContext);

  const navigate = useNavigate();

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

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
        <CartButton numberOfItems={cartItems?.length} to="/checkout">
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
