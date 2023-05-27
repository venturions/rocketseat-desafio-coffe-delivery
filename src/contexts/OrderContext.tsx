import { ReactNode, createContext, useState } from "react";
import { CartItemsType } from "../models/cartItems";

interface CyclesContextProviderProps {
  children: ReactNode;
}

interface OrderContextType {
  cartItems: CartItemsType[];
  setItemInCart: (item: CartItemsType) => void;
}

export const OrderContext = createContext({} as OrderContextType);

export function OrderContextProvider({ children }: CyclesContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItemsType[]>([]);

  function setItemInCart(item: CartItemsType) {
    setCartItems((prevOrderItems) => {
      const itemIndex = prevOrderItems.findIndex(
        (orderItem) => orderItem.coffeeName === item.coffeeName
      );

      if (itemIndex !== -1) {
        const updatedOrderItems = [...prevOrderItems];
        updatedOrderItems[itemIndex] = item;
        return updatedOrderItems;
      }

      return [...prevOrderItems, item];
    });
  }

  return (
    <OrderContext.Provider
      value={{
        cartItems,
        setItemInCart,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
