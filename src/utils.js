export const formatCurrency = (valor) => {
  return valor.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
};
