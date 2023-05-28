import { PaymentMethodsType } from "./PaymentMethod";

export interface FinishedOrderProps {
  cep: string;
  rua: string;
  numero: string;
  complemento?: string;
  bairro: string;
  cidade: string;
  uf: string;
  paymentMethod: PaymentMethodsType;
}
