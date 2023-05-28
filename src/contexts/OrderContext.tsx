import { ReactNode, createContext, useEffect, useState } from "react";
import { FinishedOrderProps } from "../@types/FinishedOrder";
import { CartItemsType } from "../@types/CartItems";
import { useNavigate } from "react-router-dom";
interface CyclesContextProviderProps {
  children: ReactNode;
}

interface OrderContextType {
  cartItems: CartItemsType[];
  finishedOrder: FinishedOrderProps;
  setItemInCart: (item: CartItemsType) => void;
  sumCartItem: (item: CartItemsType) => void;
  subCartItem: (item: CartItemsType) => void;
  removeCartItem: (item: CartItemsType) => void;
  finishOrder: (data: FinishedOrderProps) => void;
}

export const OrderContext = createContext({} as OrderContextType);

export function OrderContextProvider({ children }: CyclesContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItemsType[]>([]);
  const [finishedOrder, setFinishedOrder] = useState<FinishedOrderProps>(
    {} as FinishedOrderProps
  );

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartItemsFromLocalStorage = () => {
      const localStorageValue = localStorage.getItem(
        "@coffee-delivery:cartItems-state-1.0.0"
      );

      if (localStorageValue) {
        const parsedValue = JSON.parse(localStorageValue);
        setCartItems(parsedValue);
      }
    };

    fetchCartItemsFromLocalStorage();
  }, []);

  useEffect(() => {
    const saveCartItemsToLocalStorage = () => {
      const stateJSON = JSON.stringify(cartItems);
      localStorage.setItem("@coffee-delivery:cartItems-state-1.0.0", stateJSON);
    };

    if (cartItems.length > 0) {
      saveCartItemsToLocalStorage();
    }
  }, [cartItems]);

  const setItemInCart = (item: CartItemsType) => {
    setCartItems((prevCartItems) => {
      const itemIndex = prevCartItems.findIndex(
        (orderItem) => orderItem.coffeeName === item.coffeeName
      );

      if (itemIndex !== -1) {
        const updatedCartItems = [...prevCartItems];
        updatedCartItems[itemIndex] = {
          ...updatedCartItems[itemIndex],
          quantity: updatedCartItems[itemIndex].quantity + item.quantity,
        };
        return updatedCartItems;
      }

      return [...prevCartItems, item];
    });
  };

  const subCartItem = (cartItem: CartItemsType) => {
    setCartItems((prevCartItems) => {
      return prevCartItems.map((item) => {
        if (item.coffeeName === cartItem.coffeeName) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      });
    });
  };

  const removeCartItem = (cartItem: CartItemsType) => {
    setCartItems((prevCartItems) => {
      if (prevCartItems.length === 1) {
        localStorage.setItem(
          "@coffee-delivery:cartItems-state-1.0.0",
          JSON.stringify([])
        );
        navigate("/");
      }
      return prevCartItems.filter(
        (item) => item.coffeeName !== cartItem.coffeeName
      );
    });
  };

  const sumCartItem = (cartItem: CartItemsType) => {
    setCartItems((prevCartItems) => {
      return prevCartItems.map((item) => {
        if (item.coffeeName === cartItem.coffeeName) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
    });
  };

  const finishOrder = (data: FinishedOrderProps) => {
    setFinishedOrder(data);
    setCartItems([]);
  };

  return (
    <OrderContext.Provider
      value={{
        cartItems,
        setItemInCart,
        sumCartItem,
        subCartItem,
        removeCartItem,
        finishOrder,
        finishedOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
