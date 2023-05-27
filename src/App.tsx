import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyle } from "./styles/global";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { OrderContextProvider } from "./contexts/OrderContext";

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <OrderContextProvider>
          <Router />
        </OrderContextProvider>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
}
