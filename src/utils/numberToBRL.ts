export function numberToBRL(number: number, preffix = false) {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  if (preffix) {
    return formatter.format(number);
  }
  return formatter.format(number).replace("R$", "");
}
