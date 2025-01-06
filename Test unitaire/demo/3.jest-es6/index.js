export const addTwo = (a, b) => {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return "Les deux arguments ne sont pas des nombres.";
  }
};
